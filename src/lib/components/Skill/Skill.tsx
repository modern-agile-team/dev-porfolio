import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { SkillPropsType } from '../../common/types/ComponentTypes/SkillType';

/**
 * Express your skills using the Skill component.
 *
 * @props id: Name to be added to Sidebar (default: 'Skill')
 * @props title: Main text that expresses the skill (default: 'dev-portfolio')
 * @props titleSize: title size style (default: '24px')
 * @props isHiddenTitle: If this value is set to True, you can hide the title. (default: false)
 * @props iconName: Enter the name of the icon you searched on the following site. (default: 'simple-icons:devdotto') {@link https://icon-sets.iconify.design/}
 * @props iconSize: icon size style (defualt: '50px')
 * @props margin: Skill margin style (defualt: '0px')
 * @props padding: Skill padding style (defualt: '0px')
 */
const Skill = ({ id, title, titleSize, isHiddenTitle, iconName, iconSize, margin, padding }: SkillPropsType) => {
  return (
    <Container id={id} margin={margin} padding={padding}>
      <Icon icon={`${iconName?.toLowerCase()}`} fontSize={iconSize} />
      <Name titleSize={titleSize} isHiddenTitle={isHiddenTitle}>
        {title}
      </Name>
    </Container>
  );
};

export default Skill;

Skill.defaultProps = {
  id: 'Skill',
  title: 'dev-portfolio',
  titleSize: '24px',
  isHiddenTitle: false,
  iconName: 'simple-icons:devdotto',
  iconSize: '50px',
  margin: '0px',
  padding: '0px',
};

const Container = styled.div<SkillPropsType>`
  display: flex;
  align-items: center;
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`;

const Name = styled.span<SkillPropsType>`
  display: ${({ isHiddenTitle }) => (isHiddenTitle ? 'none' : 'flex')};
  margin-left: 8px;
  font-size: ${({ titleSize }) => titleSize};
  font-weight: bold;
`;