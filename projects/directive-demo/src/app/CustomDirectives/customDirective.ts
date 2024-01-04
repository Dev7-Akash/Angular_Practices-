import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector:'[myDir]'
})


export class CustomDirectiveComponent{
    constructor(private el:ElementRef){        
    }
   
    @HostListener('mouseover') onmouseover(){
        console.log(document.getElementById('headding1'));
        console.log(this.el.nativeElement);
        this.el.nativeElement.style.backgroundColor='yellow';
        this.el.nativeElement.style.color='black';
        //this.el.nativeElement.style.transform= "scale(1.5)";
    }


    @HostListener('mouseout') onmouseout(){
        this.el.nativeElement.style.backgroundColor='black';
        this.el.nativeElement.style.color='yellow';
       // this.el.nativeElement.style.transform = "rotate(20deg)"
    }
}
