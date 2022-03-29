import tw, { styled, css } from 'twin.macro';
import { useRouter } from 'next/router';
import { Line } from './line';
import { ClassAttributes, ButtonHTMLAttributes } from 'react';

const BackButton = tw.button`text-left`;
const ButtonContainer = tw.div`mt-auto`;

export const GoBack = (props: any) => {
  const router = useRouter();
  return (
    <ButtonContainer {...props}>
      <Line />
      <BackButton onClick={() => router.back()}>Back</BackButton>
    </ButtonContainer>
  );
};
