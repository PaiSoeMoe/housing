import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { HeaderComponent } from './header/header.component';
import { HeroParallaxComponent } from './hero-parallax/hero-parallax.component';
import { TrendingPlacesComponent } from './trending-places/trending-places.component';
import { FeaturedPropertySectionComponent } from './featured-property-section/featured-property-section.component';
import { PromoSectionComponent } from './promo-section/promo-section.component';
import { FeaturePropertyCardComponent } from './feature-property-card/feature-property-card.component';
import { TrendingPlacesCardComponent } from './trending-places-card/trending-places-card.component';
import { FpcbackupComponent } from './fpcbackup/fpcbackup.component';
import { PopularPlacesComponent } from './popular-places/popular-places.component';
import { FooterComponent } from './footer/footer.component';
import { HomeCardComponent } from './home-card/home-card.component';
import { IndexComponent } from './index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewHouseComponent } from './view-house/view-house.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeaderComponent,
    HeroParallaxComponent,
    TrendingPlacesComponent,
    FeaturedPropertySectionComponent,
    PromoSectionComponent,
    FeaturePropertyCardComponent,
    TrendingPlacesCardComponent,
    FpcbackupComponent,
    PopularPlacesComponent,
    FooterComponent,
    HomeCardComponent,
    IndexComponent,
    ViewHouseComponent,
    MobileMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
