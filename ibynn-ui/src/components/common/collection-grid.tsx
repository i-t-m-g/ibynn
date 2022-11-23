import CollectionCard from '@components/cards/collection-card';
import SectionHeader from '@components/common/section-header';
import Container from '@components/ui/container';
import useWindowSize from '@utils/use-window-size';
import { SwiperSlide } from '@components/ui/carousel/slider';
import { ROUTES } from '@utils/routes';
import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    slug: 'feel-the-thirsty-in-summer-anytime',
    image: '/assets/images/collection/1.png',
    title: 'collection-title-one',
    description: 'collection-description-one',
  },
  {
    id: 2,
    slug: 'most-popular-item-for-Fast-food',
    image: '/assets/images/collection/2.png',
    title: 'collection-title-two',
    description: 'collection-description-two',
  },
  {
    id: 3,
    slug: 'authentic-japanese-food-in-real-taste',
    image: '/assets/images/collection/3.png',
    title: 'collection-title-three',
    description: 'collection-description-three',
  },
  {
    id: 4,
    slug: 'explore-our-family-of-freshest®-foods',
    image: '/assets/images/collection/4.png',
    title: 'collection-title-four',
    description: 'collection-description-four',
  },
];

interface Props {
  className?: string;
  headingPosition?: 'left' | 'center';
}

const breakpoints = {
  '1024': {
    slidesPerView: 3,
  },
  '768': {
    slidesPerView: 3,
  },
  '540': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

const CollectionGrid: React.FC<Props> = ({
  className = 'mb-12 lg:mb-14 xl:mb-16 2xl:mb-20 pb-1 lg:pb-0 3xl:pb-2.5',
  headingPosition = 'left',
}) => {
  const { width } = useWindowSize();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/json/collections`)
      .then(res => res.json())
      .then(data => setData(data.collections));
  }, []);

  return (
    <div className={className}>
      <Container>
        <SectionHeader
          sectionHeading="text-curated-collections"
          sectionSubHeading="text-categories-grocery-items"
          headingPosition={headingPosition}
        />
        {width! < 1536 ? (
          <div>
            {data.length > 0 && data?.map((item) => (
              <SwiperSlide
                key={`collection-key-${item.id}`}
                className="px-1.5 md:px-2 xl:px-2.5 py-4"
              >
                <CollectionCard
                  key={item.id}
                  collection={item}
                  href={`${ROUTES.BUNDLE}/${item.id}`}
                />
              </SwiperSlide>
            ))}
          </div>
        ) : (
          <div className="gap-5 2xl:grid 2xl:grid-cols-4 3xl:gap-7">
            {data.length > 0 && data.map((item) => (
              <CollectionCard
                key={item.id}
                collection={item}
                href={`${ROUTES.BUNDLE}/${item.id}`}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CollectionGrid;
