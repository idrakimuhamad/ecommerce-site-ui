import React, { Component } from 'react';


class FlashDeals extends Component {
    render() {
        return (
            <div className="flash-deals">
        <Wrapper
          className="flash-deals--title"
          flexDirection="row"
          alignItems="center">
          <IoFlashSharp size={18} />
          <Box as="h4" px={2}>
            Flash Sale
          </Box>
          <Countdown />
        </Wrapper>
        <Wrapper
          flexDirection={['column', 'row']}
          justifyContent={['center', 'space-between']}
          className="flash-deals--container">
          {flashDeals.length > 0 &&
            flashDeals.map((deal, index) => (
              <Box
                key={deal.id}
                className="flash-deals-product"
                width={[1, 1 / 4]}
                mb={[3, 0]}
                pr={[0, index < 3 ? 4 : 0]}>
                <ProductCard width={1} image={deal?.images[0]} {...deal} />
              </Box>
            ))}
        </Wrapper>
        );
    }
}

export default FlashDeals;