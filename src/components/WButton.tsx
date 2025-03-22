import React from 'react'
import { GestureResponderEvent, Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'

const WButton = ({
  title,
  onPress,
  style,
}: {
  title: string
  onPress?: (event: GestureResponderEvent) => void
  style?: StyleProp<ViewStyle>
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={style}
      accessibilityLabel={title}
      accessibilityRole="button"
    >
      <View
        style={{
          height: 56,
          paddingLeft: 16,
          paddingRight: 16,
          backgroundColor: 'blue',
          justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 20, color: 'white' }}>{title}</Text>
      </View>
    </Pressable>
  )
}

export default WButton
