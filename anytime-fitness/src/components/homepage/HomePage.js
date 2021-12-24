import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import styled from "styled-components";

export default function HomePage () {
    return (
        <Page>
            <Header />
            <PageContainer>
                <About />
            </PageContainer>
            <Footer />
        </Page>
    )
}

const PageContainer = styled.div`
width: 95%;
margin: 0 auto;
`

const Page = styled.div`
background-color: #28BAD6;
color: #fff;
h2 {
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
}
ul {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
`