import React from "react";


export const RightArrowSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M19.6514 13.6543C19.6426 13.3467 19.5283 13.083 19.291 12.8457L12.4531 6.15723C12.251 5.96387 12.0137 5.8584 11.7236 5.8584C11.1348 5.8584 10.6777 6.31543 10.6777 6.9043C10.6777 7.18555 10.792 7.44922 10.9941 7.65137L17.1465 13.6543L10.9941 19.6572C10.792 19.8594 10.6777 20.1143 10.6777 20.4043C10.6777 20.9932 11.1348 21.4502 11.7236 21.4502C12.0049 21.4502 12.251 21.3447 12.4531 21.1514L19.291 14.4541C19.5371 14.2256 19.6514 13.9619 19.6514 13.6543Z" fill={fillColor} />
    </svg>
  )
}

export const PaperPlaneSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M15.3359 23.4102C16.0215 23.4102 16.4961 22.8564 16.8213 22.0127L22.6221 6.83398C22.7715 6.44727 22.8594 6.10449 22.8594 5.80566C22.8594 5.18164 22.4639 4.78613 21.8311 4.78613C21.541 4.78613 21.1895 4.86523 20.8027 5.01465L5.5625 10.8506C4.80664 11.1406 4.23535 11.6152 4.23535 12.3008C4.23535 13.1357 4.85938 13.4521 5.7207 13.7158L10.2734 15.1045C10.8887 15.2979 11.249 15.2891 11.6797 14.8848L21.4707 5.81445C21.5938 5.7002 21.7432 5.71777 21.8398 5.80566C21.9365 5.89355 21.9365 6.05176 21.8311 6.16602L12.7783 15.9746C12.4092 16.3877 12.374 16.7744 12.5586 17.3896L13.9121 21.8545C14.1758 22.751 14.4922 23.4102 15.3359 23.4102Z" fill={fillColor} />
    </svg>
  )
}

export const PencilSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M20.0116 9.49706L20.9696 8.54785C21.4443 8.07324 21.4618 7.55468 21.0312 7.11523L20.6884 6.76367C20.2577 6.333 19.7216 6.37695 19.2558 6.84277L18.2978 7.7832L20.0116 9.49706ZM9.24504 20.2461L19.1679 10.3232L17.4628 8.62695L7.53996 18.5322L6.67863 20.6064C6.58195 20.8701 6.85441 21.1602 7.11808 21.0635L9.24504 20.2461Z" fill={fillColor} />
    </svg>
  )
}

export const PencilStarSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M11.6621 8.9873C11.7852 8.9873 11.8555 8.89941 11.8818 8.78516C12.1719 7.32617 12.1543 7.29102 13.6748 6.99219C13.8066 6.96582 13.8857 6.89551 13.8857 6.77246C13.8857 6.64941 13.8066 6.5791 13.6836 6.55273C12.1455 6.23633 12.1543 6.20117 11.8818 4.75098C11.8643 4.63672 11.7852 4.55762 11.6621 4.55762C11.5391 4.55762 11.4688 4.63672 11.4512 4.75098C11.1523 6.21875 11.1787 6.27148 9.64941 6.55273C9.52637 6.57031 9.44727 6.64941 9.44727 6.77246C9.44727 6.88672 9.52637 6.96582 9.64941 6.99219C11.1787 7.2998 11.1699 7.33496 11.4512 8.78516C11.4688 8.89941 11.5391 8.9873 11.6621 8.9873ZM19.1943 12.1162C19.335 12.1162 19.4229 12.0107 19.4492 11.8789C19.7656 10.1738 19.748 10.0859 21.541 9.77832C21.6904 9.75195 21.7871 9.66406 21.7871 9.52344C21.7871 9.38281 21.6904 9.29492 21.5498 9.26855C19.748 8.94336 19.7217 8.86426 19.4492 7.16797C19.4229 7.02734 19.335 6.93066 19.1943 6.93066C19.0537 6.93066 18.957 7.02734 18.9395 7.16797C18.6318 8.88184 18.6406 8.9873 16.8301 9.26855C16.6982 9.28613 16.5928 9.38281 16.5928 9.52344C16.6016 9.66406 16.6895 9.75195 16.8301 9.77832C18.6406 10.0947 18.6582 10.1826 18.9395 11.8789C18.957 12.0107 19.0537 12.1162 19.1943 12.1162ZM6.81934 14.7529C6.95996 14.7529 7.05664 14.6562 7.07422 14.5156C7.35547 12.8105 7.38184 12.7227 9.1748 12.415C9.31543 12.3887 9.41211 12.3008 9.41211 12.1602C9.41211 12.0195 9.31543 11.9316 9.18359 11.9053C7.37305 11.5801 7.37305 11.501 7.07422 9.80469C7.04785 9.66406 6.95996 9.56738 6.81934 9.56738C6.67871 9.56738 6.59082 9.66406 6.56445 9.80469C6.2832 11.5186 6.26562 11.6064 4.46387 11.9053C4.32324 11.9316 4.22656 12.0195 4.22656 12.1602C4.22656 12.3008 4.32324 12.3887 4.45508 12.415C6.26562 12.7314 6.26562 12.8281 6.56445 14.5244C6.59082 14.6562 6.67871 14.7529 6.81934 14.7529ZM21.8662 22.2939C22.2969 22.7334 23.0352 22.7246 23.457 22.2939C23.8877 21.8457 23.8789 21.1426 23.457 20.7031L15.1074 12.3096C14.6768 11.8789 13.9385 11.8789 13.5166 12.3096C13.0859 12.7578 13.0947 13.4697 13.5166 13.9004L21.8662 22.2939ZM16.9092 16.2031L14.2637 13.5576C14.0879 13.373 14.0264 13.1621 14.2021 12.9863C14.3604 12.8281 14.5801 12.8721 14.7734 13.0566L17.4102 15.7021L16.9092 16.2031ZM11.0557 22.5137C11.2402 22.5137 11.3721 22.3906 11.3984 22.1885C11.6797 19.8154 11.7939 19.7451 14.2109 19.3672C14.4307 19.332 14.5625 19.2178 14.5625 19.0244C14.5625 18.8398 14.4307 18.7168 14.2549 18.6816C11.8027 18.207 11.6797 18.2246 11.3984 15.8604C11.3721 15.6582 11.2402 15.5352 11.0557 15.5352C10.8711 15.5352 10.7393 15.6582 10.7129 15.8516C10.4141 18.2598 10.3262 18.3477 7.86523 18.6816C7.68945 18.6992 7.54883 18.8398 7.54883 19.0244C7.54883 19.209 7.68066 19.332 7.85645 19.3672C10.335 19.8418 10.4053 19.8418 10.7129 22.2061C10.7393 22.3906 10.8711 22.5137 11.0557 22.5137Z" fill={fillColor} />
    </svg>
  )
}


export const TrashSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M9.96582 22.7686H18.043C19.3965 22.7686 20.2666 21.9512 20.3369 20.5977L20.9258 7.94141H21.8926C22.3408 7.94141 22.6836 7.58984 22.6836 7.15039C22.6836 6.71094 22.332 6.37695 21.8926 6.37695H17.9902V5.05859C17.9902 3.70508 17.1289 2.91406 15.6611 2.91406H12.3213C10.8535 2.91406 9.99219 3.70508 9.99219 5.05859V6.37695H6.10742C5.66797 6.37695 5.31641 6.71973 5.31641 7.15039C5.31641 7.59863 5.66797 7.94141 6.10742 7.94141H7.07422L7.66309 20.5977C7.7334 21.96 8.59473 22.7686 9.96582 22.7686ZM11.6357 5.1377C11.6357 4.68945 11.9521 4.39941 12.4355 4.39941H15.5469C16.0303 4.39941 16.3467 4.68945 16.3467 5.1377V6.37695H11.6357V5.1377ZM10.1416 21.1953C9.6582 21.1953 9.30664 20.835 9.28027 20.3164L8.69141 7.94141H19.2822L18.7109 20.3164C18.6934 20.8438 18.3506 21.1953 17.8496 21.1953H10.1416ZM11.4072 19.7803C11.7852 19.7803 12.0225 19.543 12.0137 19.1914L11.75 9.99805C11.7412 9.64648 11.4951 9.41797 11.1348 9.41797C10.7656 9.41797 10.5283 9.65527 10.5371 10.0068L10.8008 19.2002C10.8096 19.5518 11.0557 19.7803 11.4072 19.7803ZM14 19.7803C14.3691 19.7803 14.624 19.5518 14.624 19.2002V10.0068C14.624 9.65527 14.3691 9.41797 14 9.41797C13.6309 9.41797 13.3848 9.65527 13.3848 10.0068V19.2002C13.3848 19.5518 13.6309 19.7803 14 19.7803ZM16.5928 19.7891C16.9443 19.7891 17.1904 19.5518 17.1992 19.2002L17.4629 10.0068C17.4717 9.65527 17.2344 9.42676 16.8652 9.42676C16.5049 9.42676 16.2588 9.65527 16.25 10.0068L15.9863 19.2002C15.9775 19.543 16.2148 19.7891 16.5928 19.7891Z" fill={fillColor} />
    </svg>
  )
}

export const MicSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 14 20" fill="none">
      <path d="M7 13.0889C8.98633 13.0889 10.375 11.6035 10.375 9.47656V4.00977C10.375 1.88281 8.98633 0.397461 7 0.397461C5.02246 0.397461 3.625 1.88281 3.625 4.00977V9.47656C3.625 11.6035 5.02246 13.0889 7 13.0889ZM7 11.4629C5.97168 11.4629 5.32129 10.6719 5.32129 9.51172V3.97461C5.32129 2.81445 5.97168 2.02344 7 2.02344C8.02832 2.02344 8.67871 2.81445 8.67871 3.97461V9.51172C8.67871 10.6719 8.02832 11.4629 7 11.4629ZM2.95703 19.7861H11.043C11.5088 19.7861 11.8955 19.4082 11.8955 18.9512C11.8955 18.4854 11.5088 18.1162 11.043 18.1162H7.81738V16.332C11.2891 15.998 13.7148 13.5107 13.7148 9.87207V8.14062C13.7148 7.6748 13.3457 7.31445 12.8799 7.31445C12.4141 7.31445 12.0273 7.6748 12.0273 8.14062V9.81055C12.0273 12.8076 9.99707 14.7764 7 14.7764C4.00293 14.7764 1.97266 12.8076 1.97266 9.81055V8.14062C1.97266 7.6748 1.59473 7.31445 1.12891 7.31445C0.663086 7.31445 0.285156 7.6748 0.285156 8.14062V9.87207C0.285156 13.5107 2.71094 15.998 6.18262 16.332V18.1162H2.95703C2.49121 18.1162 2.10449 18.4854 2.10449 18.9512C2.10449 19.4082 2.49121 19.7861 2.95703 19.7861Z" fill={fillColor} />
    </svg>
  )
}

export const DeleteSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize + 1} viewBox="0 0 12 13" fill="none">
      <path d="M0.313608 10.9346C-0.0555325 11.3037 -0.0731106 11.9629 0.322397 12.3408C0.700327 12.7363 1.3683 12.7188 1.73744 12.3496L6.00013 8.08691L10.2628 12.3496C10.6408 12.7275 11.2911 12.7363 11.6691 12.3408C12.0646 11.9629 12.0558 11.3037 11.6779 10.9258L7.41517 6.66309L11.6779 2.40918C12.0558 2.02246 12.0646 1.37207 11.6691 0.994141C11.2911 0.598633 10.6408 0.607422 10.2628 0.985352L6.00013 5.24805L1.73744 0.985352C1.3683 0.616211 0.700327 0.598633 0.322397 0.994141C-0.0731106 1.37207 -0.0555325 2.03125 0.313608 2.40039L4.5763 6.66309L0.313608 10.9346Z" fill={fillColor} />
    </svg>
  )
};


export const SettingSVG = ({ size, fill }) => {
  const fillSize = size || 28;
  const fillColor = fill || "#1C1C1E";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={fillSize} height={fillSize} viewBox="0 0 28 28" fill="none">
      <path d="M13.1035 23.208H14.8877C15.6172 23.208 16.1885 22.751 16.3643 22.0479L16.7158 20.5098L16.9443 20.4219L18.2891 21.2568C18.9043 21.6436 19.6338 21.5381 20.1523 21.0195L21.3828 19.7891C21.9102 19.2617 21.998 18.541 21.6113 17.9346L20.7764 16.5898L20.8643 16.3789L22.4023 16.0186C23.0967 15.8428 23.5537 15.2715 23.5537 14.542V12.8105C23.5537 12.0811 23.1055 11.5098 22.4023 11.334L20.873 10.9648L20.7852 10.7363L21.6201 9.40039C22.0068 8.79395 21.9189 8.07324 21.3916 7.53711L20.1611 6.30664C19.6514 5.78809 18.9219 5.69141 18.3066 6.06934L16.9619 6.89551L16.7158 6.80762L16.3643 5.26074C16.1885 4.55762 15.6172 4.10938 14.8877 4.10938H13.1035C12.3652 4.10938 11.7939 4.55762 11.627 5.26074L11.2754 6.80762L11.0293 6.89551L9.68457 6.06934C9.06055 5.69141 8.33984 5.78809 7.83008 6.30664L6.59082 7.53711C6.07227 8.07324 5.97559 8.79395 6.3623 9.40039L7.19727 10.7363L7.10938 10.9648L5.58887 11.334C4.88574 11.5098 4.4375 12.0811 4.4375 12.8105V14.542C4.4375 15.2715 4.89453 15.8428 5.58887 16.0186L7.12695 16.3789L7.20605 16.5898L6.37109 17.9346C5.98438 18.541 6.08105 19.2617 6.59961 19.7891L7.83887 21.0195C8.34863 21.5381 9.07812 21.6436 9.69336 21.2568L11.0381 20.4219L11.2754 20.5098L11.627 22.0479C11.7939 22.751 12.3652 23.208 13.1035 23.208ZM13.332 21.5908C13.1826 21.5908 13.1035 21.5293 13.0859 21.3975L12.5586 19.2354C12.0049 19.1035 11.4688 18.875 11.0381 18.6025L9.13965 19.7715C9.02539 19.8418 8.91992 19.833 8.81445 19.7275L7.8916 18.8047C7.78613 18.708 7.78613 18.6025 7.85645 18.4883L9.02539 16.5898C8.7793 16.168 8.55078 15.6406 8.41895 15.0869L6.24805 14.5684C6.11621 14.5508 6.0459 14.4717 6.0459 14.3223V13.0215C6.0459 12.8633 6.10742 12.8018 6.24805 12.7666L8.41016 12.2568C8.54199 11.668 8.79688 11.123 9.0166 10.7275L7.84766 8.84668C7.77734 8.72363 7.77734 8.61816 7.87402 8.5127L8.80566 7.59863C8.91113 7.50195 9.00781 7.48438 9.13965 7.56348L11.0205 8.71484C11.416 8.46875 12.0049 8.22266 12.5674 8.08203L13.0859 5.91992C13.1035 5.78809 13.1826 5.71777 13.332 5.71777H14.6592C14.8086 5.71777 14.8789 5.7793 14.9053 5.91992L15.4326 8.09082C16.0039 8.23145 16.5225 8.46875 16.9619 8.71484L18.8428 7.56348C18.9746 7.49316 19.0713 7.50195 19.1768 7.60742L20.1084 8.52148C20.2139 8.61816 20.2139 8.72363 20.1348 8.84668L18.9746 10.7275C19.1855 11.123 19.4492 11.668 19.5811 12.2568L21.7432 12.7666C21.8838 12.8018 21.9365 12.8633 21.9365 13.0215V14.3223C21.9365 14.4717 21.875 14.5508 21.7432 14.5684L19.5723 15.0869C19.4404 15.6406 19.2031 16.1768 18.957 16.5898L20.126 18.4795C20.1963 18.6025 20.1963 18.6992 20.0908 18.7959L19.168 19.7275C19.0625 19.833 18.957 19.8418 18.8428 19.7715L16.9531 18.6025C16.5137 18.875 16.0127 19.0947 15.4326 19.2354L14.9053 21.3975C14.8789 21.5293 14.8086 21.5908 14.6592 21.5908H13.332ZM14 16.9941C15.8281 16.9941 17.3311 15.4912 17.3311 13.6543C17.3311 11.835 15.8281 10.332 14 10.332C12.1631 10.332 10.6514 11.835 10.6514 13.6543C10.6514 15.4912 12.1631 16.9941 14 16.9941ZM14 15.4736C12.998 15.4736 12.1807 14.6562 12.1807 13.6543C12.1807 12.6699 13.0068 11.8525 14 11.8525C14.9756 11.8525 15.793 12.6699 15.793 13.6543C15.793 14.6475 14.9756 15.4736 14 15.4736Z" fill={fillColor} />
    </svg>
  )
};


export const CopySVG = ({ fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="23" viewBox="0 0 20 23" fill="none">
      <path d="M0.841797 19.9424C0.841797 21.8496 1.82617 22.834 3.70703 22.834H11.9336C13.8145 22.834 14.7988 21.8408 14.7988 19.9424V18.3164H16.293C18.1738 18.3164 19.1582 17.3232 19.1582 15.4248V8.47266C19.1582 7.3125 18.9121 6.57422 18.2178 5.8623L13.8408 1.39746C13.1729 0.720703 12.3818 0.457031 11.3711 0.457031H8.06641C6.18555 0.457031 5.20117 1.4502 5.20117 3.35742V4.97461H3.70703C1.82617 4.97461 0.841797 5.97656 0.841797 7.875V19.9424ZM13.9111 10.6963L9.14746 5.8623C8.47949 5.18555 7.9082 5.00098 6.9502 4.9834V3.46289C6.9502 2.66309 7.37207 2.21484 8.21582 2.21484H11.8809V6.38965C11.8809 7.47949 12.4609 8.05078 13.542 8.05078H17.4004V15.3105C17.4004 16.1191 16.9785 16.5674 16.1348 16.5674H14.7988V13.1924C14.7988 12.0059 14.6494 11.4521 13.9111 10.6963ZM13.3311 6.16992V2.92676L16.9434 6.60059H13.7617C13.4541 6.60059 13.3311 6.47754 13.3311 6.16992ZM2.59082 19.8281V7.98926C2.59082 7.18066 3.0127 6.73242 3.86523 6.73242H6.5459V11.5137C6.5459 12.7881 7.16992 13.4033 8.43555 13.4033H13.0498V19.8281C13.0498 20.6367 12.6279 21.085 11.7754 21.085H3.85645C3.0127 21.085 2.59082 20.6367 2.59082 19.8281ZM8.60254 11.8652C8.24219 11.8652 8.08398 11.7158 8.08398 11.3467V7.06641L12.8125 11.8652H8.60254Z" fill={fill} />
    </svg>
  )
}

export const TranslateSVG = ({ size, fill }) => {
  const realSize = size || 24;
  const realFill = fill || "#fff";
  return (
    <svg width={realSize} height={realSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.8844M10 14C9.38747 13.7248 8.76265 13.3421 8.16555 12.8844M8.16555 12.8844C6.81302 11.8478 5.60276 10.4266 5 9M8.16555 12.8844C6.56086 15.0229 4.47143 16.7718 2 18" stroke={realFill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
