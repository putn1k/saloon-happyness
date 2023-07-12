export const initFaq = () => {
  const questionNodes = document.querySelectorAll( '.faq__item' );
  const showerBtnNode = document.querySelector( '.faq__show-btn' );

  if ( !showerBtnNode ) return;

  if ( questionNodes.length <= 4 ) {
    showerBtnNode.remove();
    return;
  }

  questionNodes.forEach( ( question, i ) => {
    if ( i > 3 ) {
      question.style.display = 'none';
    }
  } );

  showerBtnNode.addEventListener( 'click', ( e ) => {
    e.preventDefault();
    questionNodes.forEach( ( question ) => {
      question.style.display = '';
    } );
    showerBtnNode.remove();
  } );
};
