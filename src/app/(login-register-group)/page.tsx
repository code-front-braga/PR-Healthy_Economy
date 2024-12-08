import LoginForm from '@/components/login-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login | E.$',
	description: 'Página de login',
};

export default function LoginPage() {
	return <LoginForm />;
}
