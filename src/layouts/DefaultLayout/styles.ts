import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  @media (max-width: 680px) {
    margin: 0.5rem 0.5rem;
    padding: 1rem;
    height: calc(100vh - 1rem);
  }

  display: flex;
  flex-direction: column;
`
