export class TwitterComponent  {

  @Input() user:string;

  constructor(private renderer2: Renderer2,private el: ElementRef) {}

  ngAfterViewInit() {

    let scriptEl = document.createElement('script');
    scriptEl.src = "https://platform.twitter.com/widgets.js"

    this.renderer2.appendChild(this.el.nativeElement, scriptEl);

  }

}