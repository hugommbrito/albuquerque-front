'use client';

import { sendEmailProvider } from '@/providers/api/api.providers';
import { FormEvent, useEffect, useState } from 'react';

type IErrorStatus = {
	message: string | undefined | null;
	isValid: boolean;
	isChanged: boolean;
};

type IApiResponse = {
	message: string | undefined;
	isSuccess: boolean | undefined;
};

type VentureOption = {
	id: string | number;
	name: string;
};

type AssistenciaTecnicaFormProps = {
	termsText: string;
	ventures: VentureOption[];
};

export default function AssistenciaTecnicaForm({
	termsText,
	ventures,
}: AssistenciaTecnicaFormProps) {
	const [venture, setVenture] = useState('');
	const [ventureError, setVentureError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [unit, setUnit] = useState('');
	const [unitError, setUnitError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [document, setDocument] = useState('');
	const [documentError, setDocumentError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [name, setName] = useState('');
	const [nameError, setNameError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [description, setDescription] = useState('');
	const [descriptionError, setDescriptionError] = useState<IErrorStatus>({ message: null, isValid: false, isChanged: false });

	const [acceptedTerms, setAcceptedTerms] = useState(false);

	const [isSending, setIsSending] = useState(false);
	const [apiResponse, setApiResponse] = useState<IApiResponse>({ message: undefined, isSuccess: undefined });

	useEffect(() => {
		if (!ventureError.isChanged) return;
		if (!venture) {
			setVentureError({ message: 'Selecione um empreendimento.', isValid: false, isChanged: true });
		} else {
			setVentureError({ message: null, isValid: true, isChanged: true });
		}
	}, [venture]);

	useEffect(() => {
		if (!unitError.isChanged) return;
		if (!unit.trim()) {
			setUnitError({ message: 'Informe a unidade.', isValid: false, isChanged: true });
		} else if (unit.length > 50) {
			setUnitError({ message: 'Máximo de 50 caracteres.', isValid: false, isChanged: true });
		} else {
			setUnitError({ message: null, isValid: true, isChanged: true });
		}
	}, [unit]);

	useEffect(() => {
		if (!documentError.isChanged) return;
		if (!document.trim()) {
			setDocumentError({ message: 'Informe o CPF ou CNPJ.', isValid: false, isChanged: true });
		} else if (document.length > 18) {
			setDocumentError({ message: 'Documento inválido.', isValid: false, isChanged: true });
		} else {
			setDocumentError({ message: null, isValid: true, isChanged: true });
		}
	}, [document]);

	useEffect(() => {
		if (!nameError.isChanged) return;
		if (!name.trim()) {
			setNameError({ message: 'O nome é obrigatório.', isValid: false, isChanged: true });
		} else if (name.length > 128) {
			setNameError({ message: 'Máximo de 128 caracteres.', isValid: false, isChanged: true });
		} else {
			setNameError({ message: null, isValid: true, isChanged: true });
		}
	}, [name]);

	useEffect(() => {
		if (!phoneError.isChanged) return;
		if (!phone.trim()) {
			setPhoneError({ message: 'O telefone é obrigatório.', isValid: false, isChanged: true });
		} else if (phone.length > 20) {
			setPhoneError({ message: 'Máximo de 20 caracteres.', isValid: false, isChanged: true });
		} else {
			setPhoneError({ message: null, isValid: true, isChanged: true });
		}
	}, [phone]);

	useEffect(() => {
		if (!emailError.isChanged) return;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email.trim()) {
			setEmailError({ message: 'O e-mail é obrigatório.', isValid: false, isChanged: true });
		} else if (!emailRegex.test(email)) {
			setEmailError({ message: 'Informe um e-mail válido.', isValid: false, isChanged: true });
		} else {
			setEmailError({ message: null, isValid: true, isChanged: true });
		}
	}, [email]);

	useEffect(() => {
		if (!descriptionError.isChanged) return;
		if (!description.trim()) {
			setDescriptionError({ message: 'A descrição é obrigatória.', isValid: false, isChanged: true });
		} else if (description.length > 1024) {
			setDescriptionError({ message: 'Máximo de 1024 caracteres.', isValid: false, isChanged: true });
		} else {
			setDescriptionError({ message: null, isValid: true, isChanged: true });
		}
	}, [description]);

	const isFormValid =
		ventureError.isValid &&
		unitError.isValid &&
		documentError.isValid &&
		nameError.isValid &&
		phoneError.isValid &&
		emailError.isValid &&
		descriptionError.isValid &&
		acceptedTerms;


	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		async function send() {
			setIsSending(true);
			const response = await sendEmailProvider.AssistenciaTecnicaRequest({
				venture,
				unit,
				name,
				document,
				phone,
				email,
				description,
				accepted_terms: acceptedTerms,
			});

			setIsSending(false);

			if (response instanceof Error || !response) {
				setApiResponse({ message: 'Erro ao enviar a solicitação. Tente novamente mais tarde.', isSuccess: false });
			} else {
				setApiResponse({ message: 'Solicitação enviada com sucesso! Entraremos em contato em breve para ajustar os próximos passos.', isSuccess: true });
				setVenture('');
				setUnit('');
				setDocument('');
				setName('');
				setPhone('');
				setEmail('');
				setDescription('');
				setAcceptedTerms(false);
				setVentureError({ message: null, isValid: false, isChanged: false });
				setUnitError({ message: null, isValid: false, isChanged: false });
				setDocumentError({ message: null, isValid: false, isChanged: false });
				setNameError({ message: null, isValid: false, isChanged: false });
				setPhoneError({ message: null, isValid: false, isChanged: false });
				setEmailError({ message: null, isValid: false, isChanged: false });
				setDescriptionError({ message: null, isValid: false, isChanged: false });
			}
		}

		send();
	};

	return (
		<section className="py-15 md:py-20 px-4 md:px-30">
			<form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-10">

				{/* Bloco 1: Imóvel */}
				<div className="space-y-6">
					<h2 className="text-20 md:text-24 font-500 text-primary">Identificação do imóvel</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">Empreendimento *</label>
							<select
								className="w-full text-primary rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary appearance-none"
								value={venture}
								onChange={(e) => {
									setVenture(e.target.value);
									setVentureError((prev) => ({ ...prev, isChanged: true }));
								}}
							>
								<option value="">Selecione o empreendimento</option>
								{ventures.map((v) => (
									<option key={v.id} value={v.name}>
										{v.name}
									</option>
								))}
							</select>
							{ventureError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{ventureError.message}</p>
							)}
						</div>

						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">Unidade / Área Comum *</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="Ex: Apto 101, Bloco A"
								value={unit}
								onChange={(e) => {
									setUnit(e.target.value);
									setUnitError((prev) => ({ ...prev, isChanged: true }));
								}}
							/>
							{unitError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{unitError.message}</p>
							)}
						</div>
					</div>
				</div>

				{/* Bloco 2: Dados do solicitante */}
				<div className="space-y-6">
					<h2 className="text-20 md:text-24 font-500 text-primary">Dados do solicitante</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">CPF / CNPJ *</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="000.000.000-00"
								value={document}
								maxLength={18}
								onChange={(e) => {
									setDocument(e.target.value);
									setDocumentError((prev) => ({ ...prev, isChanged: true }));
								}}
							/>
							{documentError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{documentError.message}</p>
							)}
						</div>

						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">Nome completo *</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="Seu nome"
								value={name}
								onChange={(e) => {
									setName(e.target.value);
									setNameError((prev) => ({ ...prev, isChanged: true }));
								}}
							/>
							{nameError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{nameError.message}</p>
							)}
						</div>

						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">Telefone *</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="(00) 00000-0000"
								value={phone}
								maxLength={20}
								onChange={(e) => {
									setPhone(e.target.value);
									setPhoneError((prev) => ({ ...prev, isChanged: true }));
								}}
							/>
							{phoneError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{phoneError.message}</p>
							)}
						</div>

						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">E-mail *</label>
							<input
								type="email"
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="seu@email.com"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
									setEmailError((prev) => ({ ...prev, isChanged: true }));
								}}
							/>
							{emailError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">{emailError.message}</p>
							)}
						</div>
					</div>
				</div>

				{/* Bloco 3: Descrição */}
				<div className="space-y-6">
					<h2 className="text-20 md:text-24 font-500 text-primary">Descrição da solicitação</h2>
					<div className="relative space-y-1">
						<label className="text-12 text-primary-3">Descreva o problema *</label>
						<textarea
							className="w-full rounded-3xl bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary min-h-36 resize-none"
							placeholder="Descreva detalhadamente o problema que deseja reportar..."
							value={description}
							maxLength={1024}
							onChange={(e) => {
								setDescription(e.target.value);
								setDescriptionError((prev) => ({ ...prev, isChanged: true }));
							}}
						/>
						<div className="flex justify-between items-start">
							{descriptionError.message ? (
								<p className="text-red-500 text-10">{descriptionError.message}</p>
							) : <span />}
							<span className="text-10 text-primary-3">{description.length}/1024</span>
						</div>
					</div>
				</div>

				{/* Bloco 4: Termo */}
				<div className="space-y-4">
					<h2 className="text-20 md:text-24 font-500 text-primary">Termo de responsabilidade</h2>
					<div
						className="rounded-2xl bg-primary-5 border border-primary/20 px-6 py-5 max-h-64 overflow-y-auto text-14 text-primary-4 leading-relaxed"
						dangerouslySetInnerHTML={{ __html: termsText }}
					/>
					<label className="flex items-start gap-3 cursor-pointer group">
						<button
							type="button"
							role="checkbox"
							aria-checked={acceptedTerms}
							onClick={() => setAcceptedTerms((prev) => !prev)}
							className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border transition-colors ${
								acceptedTerms
									? 'bg-primary border-primary'
									: 'bg-primary-5 border-primary/30 group-hover:border-primary/60'
							}`}
						>
							{acceptedTerms && (
								<svg viewBox="0 0 12 10" fill="none" className="w-full h-full p-1" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							)}
						</button>
						<span className="text-14 text-primary-4 leading-snug">
							Li e aceito os termos definidos acima para a abertura de chamado de assistência técnica.
						</span>
					</label>
				</div>

				{/* Feedback da API */}
				{apiResponse.message && (
					<p className={`text-14 font-500 ${apiResponse.isSuccess ? 'text-green-600' : 'text-red-500'}`}>
						{apiResponse.message}
					</p>
				)}

				{/* Botão de envio */}
				<button
					type="submit"
					disabled={!isFormValid || isSending}
					className="w-full bg-primary text-primary-invert rounded-full py-4 font-500 text-16 hover:bg-primary/90 transition disabled:bg-primary/40 disabled:cursor-not-allowed"
				>
					{isSending ? 'Enviando...' : 'Enviar solicitação'}
				</button>
			</form>
		</section>
	);
}
