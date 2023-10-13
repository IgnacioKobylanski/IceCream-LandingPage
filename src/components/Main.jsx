import React from 'react';
import Section from './Section'; 


function Main() {
  return (
    <main>
      <Section
        title="Our Specialty: Vanilla Ice Cream"
        content="Dive into the smoothness and classic flavor of our vanilla ice cream. Made with high-quality ingredients and a traditional recipe that has delighted generations."
        imageSrc={require('../imgs/iceCreamVanilla.png')}
        className="section-1"
      />

      <Section
        title="Discover Refreshing Flavors"
        content="Explore a wide variety of refreshing flavors that will melt your heart. From tropical fruits to delightful chocolates, we have something for every ice cream lover."
        imageSrc={require('../imgs/iceCreamPop.png')}
        className="section-2"
      />

      <Section
        title="Natural Yogurt: Delicious and Nutritious"
        content="Try our natural yogurt option, a healthy and delicious alternative. With probiotics and the finest ingredients, you'll enjoy an ice cream that cares for your well-being."
        imageSrc={require('../imgs/iceCreamYogurtNB.png')}
        className="section-3"
      />
    </main>
  );
}

export default Main;
