import { createMachine, assign, EventFrom, StateFrom } from 'xstate';

interface AuthModalContext {
  email: string;
}

export const authModalMachine = createMachine({
  id: 'authModal',
  initial: 'closed',
  context: {
    email: '',
  } as AuthModalContext,
  states: {
    closed: {
      on: {
        OPEN_SIGNUP: 'signup',
        OPEN_LOGIN: 'login',
      },
    },
    signup: {
      initial: 'form',
      states: {
        form: {
          on: {
            EMAIL_SUBMITTED: {
              target: 'verifyEmail',
              actions: assign((context) => {
                return {
                  email: context.event.value,
                };
              }),
            },
          },
        },
        verifyEmail: {
          on: {
            BACK: 'form',
            CLOSE: '#authModal.closed',
          },
        },
      },
      on: {
        CLOSE: {
          target: 'closed',
          actions: assign({ email: '' }),
        },
      },
    },
    login: {
      initial: 'form',
      states: {
        form: {
          on: {
            FORGOT_PASSWORD: {
              target: 'forgotPassword',
            },
            RESEND_LINK: {
              target: 'resendLink',
            },
          },
        },
        forgotPassword: {
          on: {
            BACK: 'form',
            RESEND_LINK: {
              target: 'resendLink',
              actions: assign((context) => {
                return {
                  email: context.event.value,
                };
              }),
            },
          },
        },
        resendLink: {
          on: {
            BACK: 'forgotPassword',
            CLOSE: '#authModal.closed',
          },
        },
      },
      on: {
        CLOSE: {
          target: 'closed',
          // actions: assign({ email: '' }),
        },
      },
    },
  },
});

export type AuthModalMachineState = StateFrom<typeof authModalMachine>;
export type AuthModalMachineEvent = EventFrom<typeof authModalMachine>;
