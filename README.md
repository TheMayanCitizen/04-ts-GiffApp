## Formas de tipar el componente con ts

- `export const Phrase: React.FC<PhraseProps> = ({ quote })`
- `export const BtnPhrase = ({ nextPhrase }: NextPhraseFunc)`
- `export const FormSearch: FC<Iprops> = ({ getInputSearchInfo })`

## Retornar un valor desde un componente hijo y al componenete padre sin tener que estar enviando el setter como prop.

## Creacion del custom hook `useFetch`

## Mapeo de la respuesta de un api y extraer exclusivamente la informacion que necesito

```javascript
const info = data.map((item: any) => ({
  id: item.id,
  title: item.title,
  img: item.images.downsized_medium.url,
}));
```

## Inputs controlados
