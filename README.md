# dev-porfolio
![npm_package_badge](https://img.shields.io/badge/npm-v0.3.48-brightgreen)
![license_badge](https://img.shields.io/badge/license-MIT-lightgrey)

An open source component library for React that helps you develop your web portfolio easily and quickly.

<img width="100%" src="https://user-images.githubusercontent.com/56839474/185625494-bef1d408-f0bd-4d50-8e84-02a32ed79711.gif"></img>

## List

  * <a href="#install">Installation</a>
  * <a href="#usage">Usage</a>
  * <a href="#components">Components</a>
  * <a href="#license">Licence</a>
  * <a href="#contributor">Contributor</a>

## Install

`npm i dev-portfolio --save`

## Usage

```js
import { Header, Intro, Contact, ... } from 'dev-portfolio';

const App = () => {
  return (
    // The 'className' in the <div> tag surrounding the components of 'dev-portfolio' must be 'App'.
    // Only then can the SideBar in the <Header> component recognize id props and automatically assign all components into the SideBar.
    <div className="App">
      <Header />
      <Intro />
      <Contact />
      ...
    </div>
  );
}

export default App;
```

## Components

  * <a href="#header">Header</a>
  * <a href="#intro">Intro</a>
  * <a href="#techstacklist">TechStackList</a>
  * <a href="#contact">Contact</a>
  
### Header
<img width="100%" alt="스크린샷 2022-08-20 오후 12 11 39" src="https://user-images.githubusercontent.com/56839474/185726799-61f5301d-2bc5-40fe-acb3-49cce7ccd80e.png">

```js
import { Header } from 'dev-portfolio';

const logoOption = { ... };
const channels = [ ... ];
const sideBarOption = { ... };

const App = () => {
  return (
    <Header 
      id="Header Component"
      headerHeight="80px"
      headerWidth="100%"
      headerBackgroundColor="whitesmoke"
      logoOption={logoOption}
      channels={channels}
      sideBarOption={sideBarOption}
    />
  );
}

export default App;
```

| props | type | description |
| - | - | - |
| ```id``` | string | Name to be added to Sidebar |
| ```headerHeight``` | string | CSS for Height of Header Component |
| ```headerWidth``` | string | CSS for Width of Header Component |
| ```headerBackgroundColor``` | string | CSS for Background color of Header Component |
| ```logoOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/Header/HeaderLogoType.ts#:~:text=export%20interface-,HeaderLogoPropsType,-extends%20HeaderLogoImgStyledPropsType%2C">LogoOptionPropsType</a> | Logo & Header_Title only props |
| ```channels``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/8b8f85015e356e649deee3e988cc3e33036a3b33/app/src/lib/common/types/ComponentTypes/ChannelType.ts#:~:text=export%20interface-,ChannelType,-extends%20ChannelStyledType%20%7B">ChannelType[]</a> | Channel-only props such as Github and LinkedIn, etc |
| ```sideBarOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Header/SideBar/SideBarType.ts#1:~:text=SideBarOptionPropsType">SideBarOptionPropsType</a> | Sidebar-only props such as Sidebar's Icon, etc |

<details>
<summary>More about Header's props</summary>

  #### logoOption example
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 12 53" src="https://user-images.githubusercontent.com/56839474/185726844-534bec07-f460-4d38-8747-8ef3b7187a86.png">

  ```js
  const logoOption = {
    redirectUrl: '/',
    logoImg: 'logo.png',
    logoHidden: false,
    title: 'dev-portfolio',
    logoMargin: '0px 16px 0px 16px',
    logoWidth: '50px',
    logoHeight: '50px',
    titleColor: 'black',
    titleSize: '24px',
    titleWeight: '800',
  };
  ```
  
  #### channels example
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 14 35" src="https://user-images.githubusercontent.com/56839474/185726889-8806c049-46b6-4aac-aff4-cf100a54364c.png">

  ```js
  const channels = [
    { name: 'github', redirectUrl: 'https://', color: '#181717BB', size: '24px' },
    { name: 'naver', redirectUrl: 'https://', color: '#47A141BB', size: '24px' },
    { name: 'facebook', redirectUrl: 'https://', color: '#1877F2BB', size: '24px' },
    { name: 'youtube', redirectUrl: 'https://', color: '#FF0000BB', size: '24px' },
  ];
  ```
  
  #### sideBarOption example
 <img height="50px" alt="스크린샷 2022-08-20 오후 12 15 02" src="https://user-images.githubusercontent.com/56839474/185726904-c09dc836-ddf3-4a62-afbe-54eed722d7ef.png">
<img height="50px" alt="스크린샷 2022-08-20 오후 12 15 32" src="https://user-images.githubusercontent.com/56839474/185726921-f67e9969-8ad4-4061-a6ea-88440ad0c23c.png">

  ```js
  const sideBarOption = {
    mainTitle: 'dev-portfolio',
    iconSize: '28px',
    iconColor: '#181717BB',
    iconMargin: '0px 12px 0px 12px',
  };
  ```
  
</details>

### Intro
<img width="100%" alt="스크린샷 2022-08-20 오후 12 17 41" src="https://user-images.githubusercontent.com/56839474/185726977-27db5567-c20c-4eb3-94bd-5981f3a4ca7f.png">

```js
import { Intro } from 'dev-portfolio';

const introOption = [ ... ];

const App = () => {
  return (
    <Intro 
      id="Intro Component"
      textAlign="left"
      backgroundColor="whitesmoke"
      introOption={introOption}
    />
  );
}

export default App;
```

| props | type | description |
| - | - | - |
| ```id``` | string | Name to be added to Sidebar |
| ```textAlign``` | string | CSS for Text align of Intro Component |
| ```backgroundColor``` | string | CSS for Background color of Intro Component |
| ```introOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/IntroType.ts#:~:text=export%20interface-,IntroOptionType,-extends%20IntroTitlePropsType%2C">IntroOptionType</a> | Intro-only props such as title, description, etc |

<details>
<summary>More about Intro's props</summary>

  #### introOption example
 
 <img width="100%" alt="스크린샷 2022-08-20 오후 12 17 41" src="https://user-images.githubusercontent.com/56839474/185726977-27db5567-c20c-4eb3-94bd-5981f3a4ca7f.png">
 
  ```js
  const IntroOption = {
    title: 'Intro',
    shortIntro: 'shortIntro that will captivate people',
    description:
      'This props name is description.\nPlease write down your brief introduction here.\nIf you want to change the line, type backslash-n between the letters.\nAlso you want to move the letters to the center, change textAlign to center.\n\nSpread your dreams!',
  };
  ```
 
</details>

### TechStackList
<img width="100%" alt="스크린샷 2022-08-20 오후 12 20 39" src="https://user-images.githubusercontent.com/56839474/185727068-dc3e18b2-031f-40d4-b3a3-383fb964145a.png">

```js
import { TechStackList } from 'dev-portfolio';

const techStackList = [ ... ];

const App = () => {
  return (
    <TechStackList 
      id="Tech Stack Component"
      gap="normal" // 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider'
      techStackList={techStackList}
    />
  );
}

export default App;
```

| props | type | description |
| - | - | - |
| ```id``` | string | Name to be added to Sidebar |
| ```gap``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackListType.ts#:~:text=type-,TechStackGapType,-%3D%20%27narrower%27">TechStackGapType</a> | Spacing between 'TechStack's |
| ```techStackList``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/TechStack/TechStackType.ts#:~:text=export%20interface-,TechStackPropsType,-extends%20TechStackPropsGapType%20%7B">TechStackPropsType[]</a> | TechStack-only props such as tech name, tech logo, and progressbar, etc |

<details>
<summary>More about TechStackList's props</summary>

  #### techStackList example
 
  <img width="100%" alt="스크린샷 2022-08-20 오후 12 20 39" src="https://user-images.githubusercontent.com/56839474/185727068-dc3e18b2-031f-40d4-b3a3-383fb964145a.png">
 
  ```js
  const techStackList = [
    {
      nameOption: { name: 'Javascript', logoName: 'Javascript', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '45%',
        colorTo: '#E2D784',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'HTML5', logoName: 'HTML-5', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '30%',
        colorTo: '#E34F26',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
    {
      nameOption: { name: 'Nodejs', logoName: 'Nodejs', fontSize: '18px', logoSize: '24px' },
      progressBarOption: {
        rate: '85%',
        colorTo: '#339933',
        colorFrom: 'whitesmoke',
        width: '100%',
        height: '40px',
      },
    },
  ];
  ```
  
  #### gap example
 <img width="100%" alt="스크린샷 2022-08-20 오후 12 22 27" src="https://user-images.githubusercontent.com/56839474/185727226-b401ce50-50fb-4572-b78e-692ff6cf63ef.png">

  ```js
  // 'narrower' | 'narrow' | 'normal' | 'wide' | 'wider';
  const gap = 'narrow';
  ```
 
</details>

### Contact
<img width="100%" alt="스크린샷 2022-08-20 오후 12 32 19" src="https://user-images.githubusercontent.com/56839474/185727384-1b024c72-83e3-4ef9-84ac-68f832d8df3e.png">

```js
import { Contact } from 'dev-portfolio';

const contactOption = { ... };

const App = () => {
  return (
    <Contact 
      id="Contact Component"
      backgroundColor="whitesmoke"
      contactOption={contactOption}
    />
  );
}

export default App;
```

| props | type | description |
| - | - | - |
| ```id``` | string | Name to be added to Sidebar |
| ```backgroundColor``` | string | CSS for Background Color of Contact Component |
| ```contactOption``` | <a href="https://github.com/modern-agile-team/dev-portfolio/blob/master/app/src/lib/common/types/ComponentTypes/Contact/ContactType.ts#:~:text=interface-,ContactOptionType,-%7B">ContactOptionType</a> | Contact-only props such as title, email button, channels and my personal info, etc |

<details>
<summary>More about Contact's props</summary>

  #### contactOption example
 
  <img width="100%" alt="스크린샷 2022-08-20 오후 12 32 19" src="https://user-images.githubusercontent.com/56839474/185727384-1b024c72-83e3-4ef9-84ac-68f832d8df3e.png">
 
  ```js
  const contactOption = {
    title: 'Hello, I'm dev-portfolio.',
    subTitle: 'If you're interested in me, please press the button below :D',
    buttonText: 'Want to work with me?',
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
        description: 'Gangdong-gu, Seoul, Republic of Korea',
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
  ```
</details>


## License
MIT

## Contributor
* [seohyunsim](https://github.com/seohyunsim)
* [soonki-98](https://github.com/soonki-98)
* [woorim960](https://github.com/woorim960)
