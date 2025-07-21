import { FC, ReactNode } from 'react';

import { ForgotPassword } from '@/features/auth/ui/AuthModal/components/ForgotPassword';
import { Login } from '@/features/auth/ui/AuthModal/components/Login';
import { ResendLink } from '@/features/auth/ui/AuthModal/components/ResendLink';
import { withStateRenderer } from '@/features/auth/ui/AuthModal/utils/withStateRenderer';
import { Modal } from '@/shared/ui';

import { AuthModalMachineState, AuthModalMachineEvent } from './authModalMachine';
import { ConfirmEmail } from './components/ConfirmEmail';
import { SignUp } from './components/SignUp';

interface AuthModalProps {
  state: AuthModalMachineState;
  send: (event: AuthModalMachineEvent) => void;
  visible: boolean;
}

export const AuthModal: FC<AuthModalProps> = ({ state, send, visible }) => {
  const handlers = {
    close: () => send({ type: 'CLOSE' }),
    back: () => send({ type: 'BACK' }),
    sendEmail: (email: string) => send({ type: 'EMAIL_SUBMITTED', value: email }),
    forgotPassword: () => send({ type: 'FORGOT_PASSWORD' }),
    resendLink: (email: string) => send({ type: 'RESEND_LINK', value: email }),
  };

  const viewMap = new Map<string, ReactNode>([
    ['signup.form', <SignUp key="SignUp" onSendData={handlers.sendEmail} />],
    [
      'signup.verifyEmail',
      <ConfirmEmail email={state.context.email} key="ConfirmEmail" onBack={handlers.back} />,
    ],
    ['login.form', <Login key="Login" onForgotPassword={handlers.forgotPassword} />],
    [
      'login.forgotPassword',
      <ForgotPassword
        key="ForgotPassword"
        onResendLink={handlers.resendLink}
        onBack={handlers.back}
      />,
    ],
    [
      'login.resendLink',
      <ResendLink email={state.context.email} key="ResendLink" onBack={handlers.back} />,
    ],
  ]);

  const FSMView = withStateRenderer<AuthModalMachineState>(viewMap);

  return (
    <Modal visible={visible} onClose={handlers.close}>
      <FSMView state={state} />
    </Modal>
  );
};
