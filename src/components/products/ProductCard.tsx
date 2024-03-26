
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard ({product}) {
    const {title, image, description, price, ratings, _id} = product

  return (
    <div>
      <Link href={`/products/${_id}`}>
    <Card  sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 230 }}
        image={image}
        title={title}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontWeight="600">
         ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </ Link>
    </div>
  );
}