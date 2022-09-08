import Link from '@components/ui/link';
import Image from 'next/image';
import useWindowSize from '@utils/use-window-size';
import cn from 'classnames';

interface BannerProps {
  banner: any;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
}

function getImage(deviceWidth: number, imgObj: any) {
  if (imgObj) {
    return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
  }
}

const BannerCard: React.FC<BannerProps> = ({
  banner,
  className,
  variant = 'default',
  effectActive = true,
  classNameInner,
}) => {
  const { width } = useWindowSize();
  const { slug, title, image, name } = banner;
  const selectedImage = getImage(width!, image);
  return (
    <div className="w-50px h-40px">
      <Link
        href={slug}
        target="_blank"
        rel="noreferrer"
        className={cn(
          'h-full group flex justify-center overflow-hidden',
          classNameInner
        )}
      >
        <img
          src={
            selectedImage?.url
              ? //
                // if no image found from the api (from categories.json) then a place holder image will be displayed
                selectedImage.url
              : ''
          }
          alt={title}
          className="border-solid border-4 border-gray-200 rounded-tl-3xl rounded-br-3xl"
        />
      </Link>

      {/* 

      displaying the namw of each sub category 
      
      */}
      <h2 className="text-center  text-lg text-black">{name}</h2>
    </div>
  );
};

export default BannerCard;
