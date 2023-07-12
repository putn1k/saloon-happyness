export const initDropdownSelect = () => {
  const selectNodes = document.querySelectorAll( '[data-dd="select"]' );
  if ( selectNodes.length < 1 ) return;

  const openSelect = ( select ) => {
    select.classList.add( 'active' );
  };

  const closeSelect = ( select ) => {
    select.classList.remove( 'active' );
  };

  selectNodes.forEach( select => {
    const triggerNode = select.querySelector( '[data-dd="trigger"]' );
    const selectItem = select.querySelectorAll( '[data-dd="item"]' );

    if ( !select.classList.contains( 'cb-form-select' ) && !select.classList.contains( 'tabs-nav-select--service-nav' ) ) {
      triggerNode.textContent = selectItem[ 0 ].textContent;
    }

    if ( select.classList.contains( 'tabs-nav-select--service-nav' ) ) {
      const activeItemLink = select.querySelector( '.tabs-nav-select__item.is-active a' );
      if ( activeItemLink ) {
        triggerNode.textContent = activeItemLink.textContent;
      }
    }

    triggerNode.addEventListener( 'click', () => {
      if ( select.classList.contains( 'active' ) ) {
        closeSelect( select );
      } else {
        openSelect( select );
      }
    } );

    selectItem.forEach( item => {
      item.addEventListener( 'click', () => {
        triggerNode.textContent = item.textContent;
        closeSelect( select );
      } );
    } );
  } );
};
