'use client';

import Page from '@/app/page';
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

export default function HomeContact() {
	const [name, setName] = useState<string>('');
	const [nameError, setNameError] = useState<IErrorStatus>({
		message: null,
		isValid: false,
		isChanged: false,
	});
	const [phone, setPhone] = useState('');
	const [phoneError, setPhoneError] = useState<IErrorStatus>({
		message: undefined,
		isValid: false,
		isChanged: false,
	});
	const [message, setMessage] = useState('');
	const [messageError, setMessageError] = useState<IErrorStatus>({
		message: undefined,
		isValid: false,
		isChanged: false,
	});
	const [isSending, setIsSending] = useState(false);
	const [apiResponseMessage, setApiResponseMessage] = useState<IApiResponse>({
		message: undefined,
		isSuccess: undefined,
	});

	const validateForm = (fields: Array<'name' | 'phone' | 'message'>) => {
		fields.forEach((field) => {
			if (field === 'name') {
				if (name.length === 0 && nameError.isChanged) {
					setNameError({
						message: 'O nome é obrigatório.',
						isValid: false,
						isChanged: true,
					});
				} else if (name.length > 20) {
					setNameError({
						message: 'O nome deve ter no máximo 20 caracteres.',
						isValid: false,
						isChanged: true,
					});
				} else {
					setNameError({ message: undefined, isValid: true, isChanged: true });
				}
			}
			if (field === 'phone') {
				if (phone.length === 0 && phoneError.isChanged) {
					setPhoneError({
						message: 'O telefone é obrigatório.',
						isValid: false,
						isChanged: true,
					});
				} else if (phone.length > 20) {
					setPhoneError({
						message: 'O telefone deve ter no máximo 20 caracteres.',
						isValid: false,
						isChanged: true,
					});
				} else {
					setPhoneError({ message: undefined, isValid: true, isChanged: true });
				}
			}
			if (field === 'message') {
				if (message.length === 0 && messageError.isChanged) {
					setMessageError({
						message: 'A mensagem é obrigatória.',
						isValid: false,
						isChanged: true,
					});
				} else if (message.length > 2000) {
					setMessageError({
						message: 'A mensagem deve ter no máximo 2000 caracteres.',
						isValid: false,
						isChanged: true,
					});
				} else {
					setMessageError({
						message: undefined,
						isValid: true,
						isChanged: true,
					});
				}
			}
		});

		console.log({ nameError, phoneError, messageError });
	};

	useEffect(() => {
		validateForm(['name']);
	}, [name]);
	useEffect(() => {
		validateForm(['phone']);
	}, [phone]);
	useEffect(() => {
		validateForm(['message']);
	}, [message]);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({ name, phone, message });

		async function sendEmail() {
			setIsSending(true);
			const response = await sendEmailProvider.EmailMessage({
				name,
				phone,
				message,
			});

			if (response instanceof Error) {
				console.error('Error sending email: ', response);
				setIsSending(false);
				setApiResponseMessage({
					message: 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
					isSuccess: false,
				});
			} else {
				console.log('Email sent successfully!');
				setIsSending(false);
				setApiResponseMessage({
					message: 'Mensagem enviada com sucesso!',
					isSuccess: true,
				});
			}
			setName('');
			setPhone('');
			setMessage('');
			setNameError({ message: null, isValid: false, isChanged: false });
			setPhoneError({ message: null, isValid: false, isChanged: false });
			setMessageError({ message: null, isValid: false, isChanged: false });
		}
		sendEmail();
	};

	return (
		<section className="relative bg-[#F1F1F3] py-15 md:py-20 md:h-200">
			<img
				src="/home-page/backDrop3.svg"
				alt=""
				className="w-full h-200 absolute top-0 z-0 object-cover hidden md:block"
			/>
			<div className="w-full grid grid-cols-2 relative">
				<div className="space-y-6 col-span-2 md:col-start-2 px-4 md:px-30 flex flex-col justify-between">
					<h2 className="text-24 md:text-32 font-500 text-primary max-w-[22ch]">
						Estamos a uma mensagem de distância de você!
					</h2>
					<form className="space-y-4" onSubmit={handleSubmit}>
						<div className="relative space-y-1">
							<label className="text-12 text-primary-3">Fale conosco</label>
							<input
								className="w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="Nome"
								value={name}
								onChange={(event) => {
									setName(event.target.value);
								}}
							/>
							{nameError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">
									{nameError.message}
								</p>
							)}
						</div>
						<div className="relative space-y-1">
							<input
								className="relative w-full rounded-full bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary"
								placeholder="Telefone"
								value={phone}
								onChange={(event) => setPhone(event.target.value)}
							/>
							{phoneError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">
									{phoneError.message}
								</p>
							)}
						</div>
						<div className="relative space-y-1">
							<textarea
								className="w-full rounded-3xl bg-primary-5 border border-primary/20 px-4 py-3 outline-none focus:border-primary min-h-28"
								placeholder="Mensagem"
								value={message}
								onChange={(event) => setMessage(event.target.value)}
							/>
							{messageError.message && (
								<p className="text-red-500 text-10 absolute -bottom-3 left-4">
									{messageError.message}
								</p>
							)}
						</div>
						{/* <ButtonLinkAbq
							href="/contato"
							text="Enviar"
							variant="filled"
							fullWidth

						/> */}
						<button
							type="submit"
							className="w-full bg-primary text-primary-invert rounded-full py-3 font-500 hover:bg-primary/90 transition disabled:bg-primary/50"
							disabled={
								isSending ||
								!nameError.isValid ||
								!phoneError.isValid ||
								!messageError.isValid
							}
						>
							{isSending ? 'Enviando...' : 'Enviar'}
						</button>
						{apiResponseMessage.message && (
							<p
								className={`text-center text-14 font-500 py-2 rounded-full ${
									apiResponseMessage.isSuccess
										? 'text-green-600 bg-green-50'
										: 'text-red-600 bg-red-50'
								}`}
							>
								{apiResponseMessage.message}
							</p>
						)}
					</form>
				</div>
			</div>
		</section>
	);
}
