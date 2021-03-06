import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 46;
  margin-bottom: 20;
  margin-top: 20;
  padding: 10px;
  border-radius: 23;
  background-color: ${(p: any) => p.theme.color.primary};
  shadow-color: #000;
  shadow-offset: {width: 1, height: 1};
  shadow-opacity: 0.5;
  shadow-radius: 1;
  elevation: 1;
`

const ButtonText = styled.Text`
  align-self: center;
  text-align: center;
  font-size: ${(p: any) => p.theme.fontSize.normal};
  color: ${(p: any) => p.theme.color.secondaryText};
  letter-spacing: 0.5;
`

interface Props {
  onPress?: any
  text?: any
}

const Button = ({
  onPress,
  text,
}: Props) => {
  return (
    <Wrapper onPress={onPress}>
      <ButtonText>{text.toUpperCase()}</ButtonText>
    </Wrapper>
  )
}

export default Button