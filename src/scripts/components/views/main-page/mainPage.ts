import createDomElement from '../../../services/utilites/tag';

export default class MainPage {
  render(): void {
    const wrapper = createDomElement({
      elemType: 'div',
      classNames: ['wrapper'],
    });

    const container = createDomElement({
      elemType: 'div',
      classNames: ['container'],
    });

    const blockInfo = createDomElement({
      elemType: 'div',
      classNames: ['container__block_info'],
    });

    const blockImg = createDomElement({
      elemType: 'div',
      classNames: ['container__block_img'],
    });

    const mainImg = createDomElement({
      elemType: 'img',
      classNames: ['container__block_img_main-img'],
      atributes: {
        src: '../../../../assets/main.png',
        alt: 'main-image',
      },
    });

    const sectionInfo = createDomElement({
      elemType: 'div',
      classNames: ['container__block_info-section_info'],
    });

    const title = createDomElement({
      elemType: 'h2',
      classNames: ['section_info_title'],
      textContent: 'Демо-версия',
    });

    const content = createDomElement({
      elemType: 'p',
      classNames: ['section_info_content'],
      textContent: 'За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить ',
    });

    const btn = createDomElement({
      elemType: 'button',
      classNames: ['section_info_button'],
    });

    const btnText = createDomElement({
      elemType: 'p',
      classNames: ['section_info_button_text'],
      textContent: 'Попробовать бесплатно',
    });

    const iconBtn = createDomElement({
      elemType: 'img',
      classNames: ['container__block_img_main-img'],
      atributes: {
        src: '../../../../assets/btn.png',
        alt: 'btn-icon',
      },
    });

    btn.append(btnText, iconBtn);
    sectionInfo.append(title, content, btn);
    blockImg.append(mainImg);
    blockInfo.append(sectionInfo);
    container.append(blockInfo, blockImg);
    wrapper.append(container);
    document.body.append(wrapper);
  }
}
