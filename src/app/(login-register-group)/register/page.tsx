import RegisterForm from '@/components/register-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Register | E.$',
	description: 'Página de registro de novo usuário',
};

export default function RegisterPage() {
	return <RegisterForm />;
}
