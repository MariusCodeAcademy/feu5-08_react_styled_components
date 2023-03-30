import React from 'react';
import Button, { LargeButton, SubmitButton } from '../ui/Button.styled';

function TestStyles() {
  return (
    <div className="container">
      <h2>TestStyles</h2>
      <Button>Normal button</Button>
      <LargeButton>
        Large button <span>Red</span>{' '}
      </LargeButton>
      <Button as={'a'} href="#kazkur">
        Normal button but secretly link
      </Button>
      <span>not red</span>

      <form>
        <input type="text" />
        <SubmitButton>Login</SubmitButton>
      </form>
    </div>
  );
}

export default TestStyles;
