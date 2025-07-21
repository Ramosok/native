import { ReactNode } from 'react';

import { AuthModalMachineState } from '@/features/auth/ui/AuthModal/authModalMachine';

interface FSMRendererProps<TState extends AuthModalMachineState> {
  state: TState;
}

export function withStateRenderer<TState extends AuthModalMachineState>(
  map: Map<string, ReactNode>,
) {
  return ({ state }: FSMRendererProps<TState>): ReactNode =>
    [...map.entries()]
      .map(([path, component]) => ({ matches: state.matches(path), component }))
      .find(({ matches }) => matches)?.component ?? null;
}
