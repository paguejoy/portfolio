import styled from 'styled-components'

const Wrapper = styled.section`
   .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    /* margin: 1.5rem; */
    padding: 1rem;
    background: var(--white);
  }

  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`


export  {Wrapper}
