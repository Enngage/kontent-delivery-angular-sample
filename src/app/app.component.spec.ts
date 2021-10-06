import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [BrowserModule, HttpClientModule, NgxJsonViewerModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have responses set`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.componentInstance;

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      console.log(app);
      expect(app.itemsResponse).toBeDefined();
      expect(app.itemResponse).toBeDefined();
      expect(app.taxonomyResponse).toBeDefined();
      expect(app.taxonomiesResponse).toBeDefined();
      expect(app.languagesResponse).toBeDefined();
      expect(app.typeResponse).toBeDefined();
      expect(app.typeResponse).toBeDefined();
      expect(app.itemsFeedResponse).toBeDefined();
      expect(app.elementResponse).toBeDefined();
    });
  });
});
