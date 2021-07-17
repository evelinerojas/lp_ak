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

const FeaturesAuthor = ({
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
    title: 'A AUTORA',
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
                <div className="text-x text-color fw-700 tt-u mb-8">
                   <span style={{color:'#5658dd'}}> APRESENTAÇÃO </span>
                  </div>
                <h3 className="mt-0 mb-12">
                Andréa Keust Bandeira de Melo
                  </h3>
                <p className="m-0">
                   Nascida no Rio de Janeiro, em 25 de fevereiro de 1968, e adotada por Pernambuco desde criança. Formada em Direito pela UFPE - pela Universidade de Direito do Recife - em 1990. Ingressou na Escola da Magistratura de Pernambuco em 1991 e em 1993, após aprovação em concurso público, ingressou como Juíza Federal do Trabalho junto ao TRT da 13º Região Paraíba. Em 1997, através de processo de permuta, passou a compor o quadro de magistrado do TRT6 - Pernambuco, sendo atualmente, titular da 8ª Vara do Recife. Tem Pós-Graduação em Processo Civil pela UNIPE - 1994; Pós-Graduação em Direito à Saúde e Direito Médico pela UNIVASF - 2016 e Pós-Graduação em Psicologia Jurídica pela Faculdade IDE - 2020. Foi coordenadora adjunta da Escola Judicial do TRT6 no biênio de 2017/2019; gestora do Programa de Combate ao Trabalho Infantil e Estímulo à Aprendizagem na gestão de 2019/2021. 
                </p>              
            
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  style={{width:'70%',border:'thick double darkgray'}}
                  src={require('./../../assets/images/perfil.jpeg')}
                  alt="Features split 01"
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesAuthor.propTypes = propTypes;
FeaturesAuthor.defaultProps = defaultProps;

export default FeaturesAuthor;