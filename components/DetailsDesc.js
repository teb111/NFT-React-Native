import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { EthPrice, NFTTitle } from './SubInfo'
import { COLORS, FONTS, SIZES } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100))
  const [readmore, setReadMore] = useState(false)
  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semibold,
            color: COLORS.primary
          }}
        >
          Description
        </Text>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}
        >
          {text}
          {!readmore && '...'}
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.bold,
              color: COLORS.primary
            }}
            onPress={() => {
              if (!readmore) {
                setText(data.description)
                setReadMore(true)
              } else {
                setText(data.description.slice(0, 100))
                setReadMore(false)
              }
            }}
          >
            {readmore ? 'Show Less' : 'Show More'}
          </Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc