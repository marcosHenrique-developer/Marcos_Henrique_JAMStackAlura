import React from 'react';
import * as S from './style';

// export const color = ['primary', 'secondary', 'tertiary'];

export default function Cover() {
  const techs = ['NextJS', 'ReactJS', 'Styled Components', 'ESLint'];

  let currentTechIndex = 0;

  const [currentTech, setCurrentTech] = React.useState(techs[currentTechIndex]);

  function getTechToDisplay() {
    const nextTechIndex = (currentTechIndex + 1 + techs.length) % techs.length;

    currentTechIndex = nextTechIndex;

    setCurrentTech(techs?.[nextTechIndex] ?? techs[0]);
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      getTechToDisplay();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <S.Wrapper>
      <S.TitleWrapper>
        <div>
          <h1>Projeto criados usando: </h1>
          <strong>{currentTech}</strong>
        </div>
        <span>Marcos Henrique - Bootcamp Alura NextJS</span>
      </S.TitleWrapper>
    </S.Wrapper>
  );
}
