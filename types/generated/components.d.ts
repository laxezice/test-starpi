import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeBanner extends Schema.Component {
  collectionName: 'components_home_banners';
  info: {
    displayName: 'Banner';
    icon: 'book';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    test: Attribute.Component<'home.content', true>;
  };
}

export interface HomeContent extends Schema.Component {
  collectionName: 'components_home_contents';
  info: {
    displayName: 'content';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.banner': HomeBanner;
      'home.content': HomeContent;
    }
  }
}
