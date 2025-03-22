import React from 'react'
import { Button, Text, View } from 'react-native'
import WButton from './components/WButton'

const Documents = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Button title="Submit" />
      <WButton title="Submit" style={{ marginTop: 16 }} />
      {/* <Text>Documents</Text> */}
    </View>
  )
}

export default Documents
