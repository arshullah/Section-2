import Card from '@/components/Card'
import Mybutton from '@/components/Mybutton'
import React from 'react'

const Home = () => {
  return (
    <div>

      <Mybutton>Button 1</Mybutton>
      <Mybutton>Summit</Mybutton>
      <Mybutton>Explore</Mybutton>
      <Mybutton>login</Mybutton>
<Card
title="my card title"
description="my description"
primaryText="OK"
secondaryText="Cancel"

/>

    </div>
  )
}

export default Home