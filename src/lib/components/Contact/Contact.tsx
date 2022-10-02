import styled from 'styled-components';
import ContactForm from './ContactForm';
import AboutMe from './AboutMe';
import { ContactPropsType, ContactStyledPropsType } from '../../common/types/ComponentTypes/Contact/ContactType';

/**
 * This Component is for your contacts like email and P.H.
 * You can also appeal your channels like github and youtube.
 * Let's use this component to promote all your channels!
 *
 * @props id: Name to be added to Sidebar
 * @props backgroundColor: Contact Background Color	(default: whitesmoke)
 * @props title: Core of your contacts (default: 'Hello, my name is DEV_PORTFOLIO')
 * @props subTitle: Sub title text (default: 'If you're interested in me, please press the button below :D')
 * @props email: Your Email (default: 'abc@dev-portfolio.com')
 * @props buttonText: Text of button that function as a link to your email (default: 'Want to work with me?')
 * @props channels: Array of your channels like github and blogs (default: an array of 4 in length)
 * @props aboutMeInfos: Your personal information like TEL, Home etc
 * @channels name: Channel name
 * @channels redirectUrl: link to channel
 * @channels color: Color of Channel Icon
 * @channels size: Size of Channel Icon (unit: px)
 * @channels margin: Css margin of each Icons
 * @aboutMeInfos title: Kind of personal information
 * @aboutMeInfos description: Description for title
 */
const Contact = ({
  id,
  backgroundColor,
  title,
  subTitle,
  email,
  buttonText,
  channels,
  aboutMeInfos,
}: ContactPropsType) => {
  return (
    <Container id={id} backgroundColor={backgroundColor}>
      <ContactForm title={title} subTitle={subTitle} email={email} buttonText={buttonText} channels={channels} />
      <AboutMe aboutMeInfos={aboutMeInfos} />
    </Container>
  );
};

const Container = styled.div<ContactStyledPropsType>`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'whitesmoke'};
  padding: 10px 10px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 1em;
  }
`;

Contact.defaultProps = {
  title: 'Hello, my name is DEV_PORTFOLIO',
  subTitle: `If you're interested in me, please press the button below :D`,
  buttonText: 'Want to work with me?',
  email: 'abc@dev-portfolio.com',
  channels: [
    {
      name: 'github',
      redirectUrl: 'https://',
      color: '#181717BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'naver',
      redirectUrl: 'https://',
      color: '#47A141BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'facebook',
      redirectUrl: 'https://',
      color: '#1877F2BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
    {
      name: 'youtube',
      redirectUrl: 'https://',
      color: '#FF0000BB',
      size: '18px',
      margin: '0px 12px 0px 0px',
    },
  ],
  aboutMeInfos: [
    {
      title: 'Where I live',
      description: 'Seoul, Republic of Korea',
    },
    {
      title: 'Give me a call',
      description: 'T. +82 (0)10 1234 5678',
    },
    {
      title: 'Or, why don’t you email me?',
      description: 'dev-portfolio@gmail.com',
    },
  ],
};

export default Contact;