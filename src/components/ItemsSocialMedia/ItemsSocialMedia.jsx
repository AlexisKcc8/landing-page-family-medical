import { dataSocialsMedia } from '@data/socialMedia';

export const ItemsSocialMedia = (props) => {
  let { onlyTheseIcons, showTitle } = props;
  //si la propiedad viene vacia o de plano no viene, le asignamos un array vacio y renderizara todos los iconos, en caso contrario respetara
  onlyTheseIcons = onlyTheseIcons === undefined ? [] : onlyTheseIcons;
  showTitle = showTitle === undefined ? false : true;
  return (
    <>
      {dataSocialsMedia ? (
        onlyTheseIcons.length > 0 ? (
          dataSocialsMedia.map((icon) =>
            [...onlyTheseIcons].includes(icon.title) ? (
              <li className="" key={icon.id} style={{ listStyle: 'none' }}>
                <a
                  className="text-decoration-none"
                  href={icon.url}
                  target="_black"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: '2rem', height: '2rem' }}
                    src={icon.icon}
                    alt={`icono-${icon.title}`}
                  />
                  {showTitle ? (
                    <span className="ms-2">{icon.titleLink}</span>
                  ) : null}
                </a>
              </li>
            ) : null
          )
        ) : (
          dataSocialsMedia.map((icon) => (
            <li className="" key={icon.id} style={{ listStyle: 'none' }}>
              <a
                className="text-decoration-none"
                href={icon.url}
                target="_black"
                rel="noopener noreferrer"
                style={{ color: 'inherit' }}
              >
                <img
                  style={{ width: '2rem', height: '2rem' }}
                  src={icon.icon}
                  alt={`icono-${icon.title}`}
                />
                {showTitle ? (
                  <span className="ms-2">{icon.titleLink}</span>
                ) : null}
              </a>
            </li>
          ))
        )
      ) : (
        <h6>redes sociales no encontradas</h6>
      )}
    </>
  );
};
