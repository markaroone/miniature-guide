import { Box, Typography, Link } from '@mui/material';

export type LinksItem = {
  link: string;
  label: string;
};

export type FooterProps = {
  label: string;
  data: Array<LinksItem>;
};

export const Footer = ({ label, data }: FooterProps) => {
  return (
    <Box
      sx={{
        py: 3,
        px: '14px',
        flexBasis: '42px',
        flexGrow: 0,
        flexShrink: 0,
        display: 'flex',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <Typography
          fontSize={16}
          sx={{
            pt: 0.5,
          }}
        >
          <b>Copyright </b>
          {label}
        </Typography>
        <Box>
          {data.map(({ label, link }) => (
            <Link
              href={link}
              target="_blank"
              fontSize={16}
              key={`${label}`}
              sx={{
                px: 1,
                '&:nth-of-type(2)': {
                  px: 1,
                  borderLeft: '1px solid #3D4D54',
                  borderRight: '1px solid #3D4D54',
                },
              }}
            >
              {label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
