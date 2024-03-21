import { CarouselGallery } from '../../components/CarouselGallery/CarouselGallery';
import { GridGallery } from '@components/GridGallery/GridGallery';
import { dataRecognitions } from '@data/galleryRecognition';
import { InView } from 'react-intersection-observer';

import './stylesRecognitionGallery.scss';
export const RecognitionGallery = () => {
  return (
    <section className="container-fluid-recognition container-fluid">
      <article className="container-recognition container px-lg-5 ">
        <div className="row-recognition row">
          <aside className="col-info col-12 col-lg-6">
            <div className="content-info">
              <InView>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`m-0 subtitle-section animate__animated ${
                      inView ? 'animate__fadeIn' : 'animate__fadeOut'
                    }`}
                  >
                    Si gustas puedes hecharle un ojo a mis
                  </p>
                )}
              </InView>
              <InView>
                {({ inView, ref }) => (
                  <h2
                    ref={ref}
                    className={`title-section animate__animated ${
                      inView ? 'animate__fadeInLeft' : 'animate__fadeOut'
                    }`}
                  >
                    <strong>Diplomas y certificados</strong>
                  </h2>
                )}
              </InView>
              <InView>
                {({ inView, ref }) => (
                  <p
                    ref={ref}
                    className={`text-recognition animate__animated ${
                      inView ? 'animate__fadeIn' : 'animate__fadeOut'
                    }`}
                  >
                    Cada uno de estos documentos representa un hito en mi viaje
                    educativo y profesional, y refleja mi compromiso con la
                    excelencia en la medicina familiar. A través de años de
                    estudio riguroso y dedicación continua, he adquirido el
                    conocimiento y las habilidades necesarias para proporcionar
                    una atención integral y compasiva a mis pacientes y sus
                    familias.
                  </p>
                )}
              </InView>
            </div>
          </aside>
          <aside className="d-md-none col-12">
            <CarouselGallery
              galleryID={dataRecognitions.galleryIdMobile}
              images={dataRecognitions.images}
            />
          </aside>
          <aside className="col-12 col-lg-6">
            <section className="container py-0 d-none d-md-block">
              <GridGallery
                galleryID={dataRecognitions.galleryIdDesktop}
                images={dataRecognitions.images}
              />
            </section>
          </aside>
        </div>
      </article>
    </section>
  );
};
