export default function(){
    this.transition(
        this.fromRoute('index'),
        this.toRoute('contact'),
        this.toRoute('about'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('about'),
        this.toRoute('contact'),
        this.use('toLeft'),
        this.reverse('toRight')
    );

}
