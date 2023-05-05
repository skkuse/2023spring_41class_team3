import styled from 'styled-components';


const TITLE = "Skills speak louder than words";
const DESCRIPTION = "We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.";


const IntroWrapper = styled.div`
    justifyContent: center;
    alignItems: center;    
`

const Title = styled.h1`
    text-align: center;
    font-size: 64px;
    
    width: 40rem;
    margin: 5rem auto 2rem auto;
`;


const Description = styled.div`
    text-align: center;
    font-size: 24px;
    color: #55565B;
    width: 50rem;
    margin: 2rem auto;
`;


function IntroContainerFirst() {
    return (
        <IntroWrapper>
            <Title>{TITLE}</Title>
            <Description>{DESCRIPTION}</Description>
        </IntroWrapper>
    );
}

export default IntroContainerFirst;