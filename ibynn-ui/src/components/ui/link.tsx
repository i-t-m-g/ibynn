import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const Link: React.FC<NextLinkProps & { className?: string }> = ({
  href,
  children,
  ...props
}) => {
  return (
    <NextLink href={href} target={''} rel={''}>
      <a {...props}>{children}</a>
    </NextLink>
  );
};

export default Link;
