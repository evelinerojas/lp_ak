import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesBooks = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'OBRAS PUBLICADAS',
    paragraph: ''
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
         <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  LIVRO
                  </div>
                <h3 className="mt-0 mb-12">
                  O Fio da Vida
                  </h3>
                <p className="m-0">
                "Um livro escrito ao sabor dos dias quase sempre longos, às vezes insanos, como forma de responder às sensações complexas que os momentos pandêmicos da Covid-19 impoẽm à revelia dos nossos desejos, registra em todas as suas crônicas um mesmo sentimento profundo de amor, solidariedade e esperança no futuro, o que lhe dá uma admirável unidade, além do grande prazer pela sua leitura". - <span style={{fontStyle:'italic'}}> Wilson Garcia </span>.
                  </p>
                  <div style={{paddingTop:'1rem'}}>
                  <a style={{color: 'darkgrey', fontSize:'18px'}} href="https://cielolink.com.br/2UbPeg8"> clique aqui para <span style={{backgroundColor:'#5658DD', color:"white", padding:'0.4rem', fontWeight:'bold'}}> COMPRAR  </span></a>
                  </div>
                  <div style={{fontSize:'15px', paddingTop:'1rem'}}>
                  <a  href="https://www.frete-facil.com/calcular-frete/09yfmmgqz1z0">Consulte frete</a>
                  </div>

              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  style={{width:'70%'}}
                  src={require('./../../assets/images/book_01.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  LIVRO
                  </div>
                <h3 className="mt-0 mb-12">
                  Mitos, Pandemia e Valores Humanos
                  </h3>
                <p className="m-0">
                  Uma rica obra autoral que traduz com delicadeza uma leitura construída a partir de um olhar repleto de beleza, bondade e justiça, como a exortar o despertar do amor que nos redime e salva. O grande destaque que merece ser realizado é a empreitada bem sucedida e de extrema sensibilidade da autora que permite ao leitor estabelecer uma grande e insólita viagem no tempo, retornando às raízes do pensamento filosófico grego expressado a partir da perspectiva mitológica, possibilitando uma investigação oportuna no pensamento e dilemas que nos são tão peculiares em humanidade. - <span style={{fontStyle:'italic'}}> Daniela Mello </span>. 
                  </p>
                  <div style={{paddingTop:'1rem'}}>
                  <a style={{color: 'darkgrey', fontSize:'18px'}} href="https://cielolink.com.br/2UbPeg8"> clique aqui para <span style={{backgroundColor:'#5658DD', color:"white", padding:'0.4rem', fontWeight:'bold'}}> COMPRAR  </span></a>
                  </div>
                  <div style={{fontSize:'15px', paddingTop:'1rem'}}>
                  <a  href="https://www.frete-facil.com/calcular-frete/jtd0nngt8y9q">Consulte frete</a>
                  </div>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  style={{width:'70%'}}
                  src={require('./../../assets/images/book_00.jpg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesBooks.propTypes = propTypes;
FeaturesBooks.defaultProps = defaultProps;

export default FeaturesBooks;

// alternative color span #D024A2