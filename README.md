This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


[API routes] can be accessed on [http://localhost:3000/api/items?q=:query]. This endpoint can be edited in `pages/api/items/index.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes] instead of React pages.

## Techincal comments

I decide implement the services files to API endpoints required like in rehidratation methods into each pages to have a syncronus data managment.

I implemented atomic desing to do the app scalable to re-use the components when a where it will be necessary.

Also Next because has SSR and it improve the app performance in client side and this one has the facility to create endpoints into the same project using express.

### files structures
In components folder are all re-usables components developed in react and those could be used when be required. 

About pages folder are all app pages/routes some are dinamic and receives params. 

into services folder are the logic to consume the mercadolibre API https://api.mercadolibre.com/ and process data enough to app flow like the endpoints requested. Here is used the transform folder here is methods to format data like it´s required.

The styles folder are the scss modules to has style the app this is a interesting way to do it. And in the utils folder are the helpers methods and constants to use through the app. 

