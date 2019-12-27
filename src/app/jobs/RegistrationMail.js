import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    async handle({ data }) {
        const { user } = data;

        await Mail.sendMail({
            from: 'Guilherme Matos <guilherme@email.com>',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, em vindo ao sistema de filas :D`
        });
    }
}