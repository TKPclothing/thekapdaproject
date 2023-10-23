interface props {
  className: string;
  onClick: any;
}
export const FooterLogo = ({ className, onClick }: props) => {
  return (
    <svg viewBox="0 0 163.52 236.41" className={className} onClick={onClick}>
      <g id="Layer_2-2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <g>
            <g>
              <path d="m66.43,66.28c-2.32-1.38-3.56-3.39-3.55-6.13,0-.92.03-1.85,0-2.77-.14-4.01-2.5-4.64-5.61-3.88-1.83.45-3.19,1.87-4.41,3.25-.74.84-.41,2.07-.3,3.08.22,2.06,0,4.11-.12,6.15-.21,3.46-.06,6.92-.18,10.38-.05,1.31.82.52,1.2.37,2.68-1.01,5.35-2.02,8.11-2.76.27-.07.52-.21.84.05-.21,1.26-1.54,1.3-2.29,1.92-2.23,1.84-4.83,3.07-7.71,3.59-.54.1-.4.43-.4.7,0,2.77-.24,5.53-.25,8.29-.02,4.16-.31,8.3-.38,12.46-.05,3.37-.18,3.4,3.19,3.35,10.16-.15,20.33-.19,30.49-.39,6.28-.12,12.57.08,18.84-.24,4.48-.22,8.96-.32,13.42-.13,4.16.18,8.3.17,12.45.16,4.37-.01,8.74-.18,13.08-.76.62-.08,1.27-.01,1.93.11-1.57.84-3.32,1.09-5,1.52-.13.03-.28,0-.41.03-1.07.22-2.53.11-3.11.77-.68.77.6,1.89.75,2.94.22,1.55.49,3.09.73,4.63.56,3.46.31,6.87-.51,10.28-.36,1.5.2,3.01.3,4.52.13,2.03-.08,4.03-.42,5.97-.42,2.34-.06,4.61.17,6.85.23,2.14,0,4.32.56,6.45.29,1.13.76,2.25.72,3.7-2.25-1.18-4.18-2.4-4.76-4.87-1.26-5.33-1.09-10.68-.11-16.03.53-2.87.65-5.74-.03-8.61-.37-1.58.05-3.12.29-4.65.42-2.64.13-5.24-.2-7.83-.08-.68-.2-1.37-.16-2.04.05-.82-.26-1.1-1.03-.98-8.01,1.19-16.08.82-24.14.8-.36,0-.72.04-1.18.08,1.15,2.94,1.61,5.93,1.67,9,.02,1.17-.43,1.88-1.52,2.12-3.22.7-4.73,3.13-6.01,5.82-.26.56-.49,1.23-.05,1.69.44.46,1.08.05,1.54-.19,2.04-1.05,4.13-1.95,6.12-3.14,3.63-2.18,7.4-3.02,11.45-.54,3.92,2.39,6.94,5.46,7.94,9.96.59,2.66.5,5.47-.58,8.16-1.13,2.81-3.6,4.06-5.92,5.54-2.45,1.56-5.32,2.05-7.94,3.16-1.7.71-3.12,1.72-4.12,3.3-.18.28-.33.51-.37.86-.21,1.6-.32,1.62-1.67.74-.95-.62-1.62-1.52-2.33-2.35-.91-1.06-.27-3.13,1.02-4.47,1.65-1.72,3.73-2.65,5.9-3.41,3.14-1.11,6.15-2.49,8.9-4.37,2.38-1.63,3.45-3.99,3.42-6.86-.01-.97,0-1.94,0-2.91,0-2.04-.99-3.17-2.87-3.83-2.47-.86-4.78-.66-7.08.47-1.18.58-2.38.97-3.5,1.86-1.5,1.2-3.54,1.76-5.4,2.48-1.23.47-2.49.15-3.58-.53-2.76-1.74-4.43-4.26-5.01-7.47-.22-1.25.21-2.41.94-3.37,1.51-1.97,3.32-3.56,5.79-4.3,2.68-.8,2.67-.84,2.44-3.52v-.14c-.19-2.67-1.62-4.02-4.29-4.03-3.3-.01-6.61,0-10.2,0,2.38,2.1,2.58,4.65,2.94,7.36.48,3.65-.1,7.25.19,10.86.08,1,.22,2.01.25,3.01.08,2.67-.15,5.32-.51,7.97-.21,1.51.16,3.02.23,4.53.12,2.85.04,5.71-.24,8.56-.14,1.43.35,2.57,1.93,2.86.85.16.84.73.81,1.34-.02.53.19,1.17-.5,1.44-.64.25-1.02-.24-1.43-.6-3.25-2.8-4.99-6.41-4.66-10.63.33-4.19-.16-8.39.49-12.55.29-1.89.44-3.79.38-5.76-.41,1.15-1.18,1.97-1.98,2.81-2.29,2.42-4.92,2.18-7.36.15-1.72-1.43-3.06-3.19-4.05-5.21-.78-1.58-.87-3.25-.45-4.87.83-3.2.57-6.25-.69-9.27-.11-.25-.2-.51-.34-.88.91.02,1.45.34,1.91,1.08,1.06,1.73,2.03,3.46,2.71,5.4,1.02,2.9.75,5.71.09,8.57-.45,1.93-.3,2.29,1.58,2.01,2.66-.41,5.06-1.3,6.61-3.89,1.57-2.62,2.21-5.24,1.62-8.27-.33-1.69.08-3.48-.26-5.23-.15-.76-.41-.85-1.05-.87-5.06-.11-10.11-.4-15.18-.46-6.5-.08-13-.33-19.5-.41-1.15-.02-2.31.06-3.46.04-.59,0-.84.19-.83.8.02,1.52,0,3.04,0,4.59.66-.09,1.03-.31,1.46-.86.87-1.1,1.96-2.02,3.22-2.74,3.19-1.81,6.4-1.72,9.73-.41,3.24,1.28,5.22,3.67,6.59,6.77.96,2.19,1.91,4.33,2.24,6.75.18,1.34,0,2.56-.28,3.81-1.1,4.86-3.95,8.67-7.75,11.64-2.8,2.18-5.62,4.33-7.75,7.13-2.47,3.25-3.47,6.97-2.28,11.07.17.59.5,1.31-.18,1.77s-1.22-.14-1.75-.46c-2.3-1.36-3.06-3.61-3.22-6.08-.19-3.06.41-5.82,2.16-8.55,1.82-2.83,4.01-5.17,6.58-7.18,2.47-1.93,4.79-4,7.04-6.18,2.71-2.63,3.94-5.96,4.69-9.49.48-2.28-.81-3.95-2.67-5-3.21-1.82-6.71-2.51-10-.51-3.28,2-6.18,4.5-6.48,8.88-.19,2.7-1.21,5.24-2.03,7.81-.08.26-.18.54-.16.8.21,3.42-.04,6.84-.33,10.22-.32,3.72.09,7.45-.46,11.16-.19,1.3,0,2.65-.03,3.98-.09,4.16-.2,8.31-.3,12.47,0,.2.09.45-.22.59-.35-.4-.18-.87-.19-1.29-.06-5.22-.06-10.45-.16-15.67-.1-5.31-.28-10.61-.44-15.92,0-.33.18-.79-.33-.94-.4-.12-.52.28-.76.47-1.82,1.38-3.93,2-6.15,2.51-2.28.52-4.12.06-5.85-1.46-.78-.69-1.64-1.33-2.49-1.93-2.04-1.43-2.86-3.68-4.13-5.63-.84-1.29-.84-2.82-.48-4.3.39-1.57.8-3.13.75-4.77-.04-1.32,1.3-1.55,1.97-2.29.89-.97,2.03-1.69,3.24-2.3,2.47-1.25,4.96-.78,6.86,1.26.89.95,1.67,1.96,2.36,3.06.64,1.02.95,2.09.8,3.28-.07.59.26,1.46-.79,1.42-.85-.03-1.3-.65-1.38-1.45-.08-.78-.07-1.57-.06-2.36,0-.99-.46-1.41-1.43-1.46-1.49-.07-2.81.3-3.92,1.33-1.1,1.03-2.41,1.83-3.36,3.01-.62.77-1.01,1.62-.98,2.64.02.73-.07,1.45-.23,2.18-.39,1.8.06,3.45,1.38,4.79.35.36.74.79,1.27.74,3.34-.32,6.79-.44,9.32-3.07,1.73-1.79,2.39-4.22,3.14-6.5,1.76-5.35.63-10.89.83-16.34.08-2.12-.02-2.26-2.13-2.11-2.71.2-5.07-.63-7.03-2.33-1.34-1.16-2.23-2.8-3.06-4.38-1.13-2.13-2.43-4.11-4.25-5.72-1.11-.98-2.49-1.49-3.9-1.63-3.54-.35-6.98.3-10.36,1.33-2.87.87-5.97,1.11-8.7.32-3.26-.94-5.97-3.17-7.4-6.57-1.16-2.74-1.26-5.31-.36-8.26,2.03-6.7,8.38-8.73,13.47-7.94,4.3.66,8.24,2.51,12.41,3.61,3.21.85,6.39,1.23,9.56-.26,1.38-.65,2.54-1.51,3.36-2.79,1.72-2.68,3.52-5.3,5.71-7.62.13-.13.23-.34.38-.39,1.89-.66,1.49-2.25,1.51-3.66.05-2.58-.09-5.17.58-7.71.12-.46.28-.87.52-1.27.88-1.42,2.46-1.42,3.28.05.82,1.45.96,3.06.9,4.7,0,.38-.22.89.26,1.11.47.22.76-.23,1.05-.5,1.65-1.6,3.45-2.66,5.9-2.54,1.84.09,3.33,1.24,3.67,3.06.31,1.69.15,3.4.29,5.09.15,1.73.79,3.27,2.44,4.18,1.67,1.9,4.63,2.15,7.26.84,2.44-1.22,4.27-3.23,4.86-5.94.41-1.89.95-3.74.35-5.87-.72-2.56-1.11-5.21-2.03-7.76-.94-2.61-1.78-5.38-1.21-8.17.99-4.83,3.65-7.72,9.2-6.46,2.48.56,4.66,1.95,7.11,2.57,2.77.69,5.37.78,8.13-.59,1.94-.96,3.71-1.93,5-3.64,1.45-1.92,2.36-4.1,2.56-6.52.02,3.05-1.16,5.65-3.16,7.87-3.52,3.9-8.96,5.06-14.06,3.1-2.16-.83-4.34-1.72-6.61-2.1-3.14-.53-5.42.39-6.71,3.61-.93,2.32-.92,4.74-.31,7.27.74,3.08,2.34,5.87,2.78,9.02.62,4.38.48,8.56-2.86,12.03-2.74,2.85-5.69,3.58-9.23,2.14-.17-.07-.36-.08-.54-.12h.01Zm-28.35,14.9c2.68-.59,5.34-1.22,8.02-1.75.75-.15,1.03-.43,1.02-1.16-.04-4.9-.07-9.79-.1-14.69,0-.32.04-.72-.31-.85-.36-.14-.56.23-.79.45-1.86,1.76-3.38,3.77-4.7,5.96-1.3,2.16-2.78,4.11-5.25,5.11-2.84,1.16-5.82.98-8.68.62-2.27-.29-4.43-1.41-6.64-2.15-3.84-1.29-7.74-2.58-11.82-1.52-4.16,1.08-6.75,4.06-7.75,8.09-1.02,4.11,1.19,8.81,4.6,11.04,2.7,1.76,5.63,2.17,8.74,1.61,2.75-.5,5.47-1.15,8.23-1.58,2.77-.43,5.51-.3,8.07,1.1,2.69,1.47,4.24,3.99,5.43,6.54,2.17,4.61,4.88,6.58,10.05,6.58,1.18,0,1.47-.37,1.45-1.49-.15-7.02-.28-14.03-.32-21.05,0-1.33-.53-1.51-1.58-1.21-2.09.58-4.26.55-6.39.75-.42.04-.95.2-1.27-.39h0Zm10.64-21.72c1.17-.86,2.42-1.41,2.2-3.01-.12-.91-.34-1.8-.52-2.7-.07-.32-.2-.66-.58-.68-.42-.02-.47.38-.59.66-.72,1.79-.63,3.65-.51,5.73Zm2.2.97c0-.37.02-.74,0-1.11-.03-.49-.33-.56-.63-.27-.84.81-1.95,1.46-1.63,2.95.17.76.19,1.55.31,2.32.06.35.14.81.56.85.48.04.73-.38.83-.79.29-1.3.56-2.61.56-3.95Z" />
              <g>
                <g>
                  <path d="m60.14,162.32h2.56c.86,0,1.51.23,1.95.7s.65,1.14.65,2.04v1.09c0,.9-.22,1.58-.65,2.04-.43.46-1.08.7-1.95.7h-.82v4.51h-1.74v-11.07Zm2.56,4.98c.28,0,.5-.08.64-.24.14-.16.21-.43.21-.81v-1.31c0-.38-.07-.65-.21-.81-.14-.16-.36-.24-.64-.24h-.82v3.4h.82Z" />
                  <path d="m72.73,162.32h2.58c.9,0,1.55.21,1.96.62.41.42.62,1.06.62,1.92v.68c0,1.15-.38,1.88-1.14,2.18v.03c.42.13.72.38.89.78.17.39.26.91.26,1.57v1.95c0,.32.01.57.03.77.02.2.07.39.16.58h-1.77c-.06-.18-.11-.35-.13-.51-.02-.16-.03-.44-.03-.85v-2.03c0-.51-.08-.86-.25-1.06-.16-.2-.45-.3-.85-.3h-.6v4.75h-1.74v-11.07Zm2.37,4.75c.35,0,.61-.09.78-.27.17-.18.26-.48.26-.9v-.85c0-.4-.07-.69-.21-.87-.14-.18-.37-.27-.67-.27h-.79v3.16h.63Z" />
                </g>
                <g>
                  <path d="m86.02,172.83c-.45-.49-.68-1.17-.68-2.06v-5.82c0-.89.23-1.57.68-2.06.45-.48,1.11-.73,1.96-.73s1.51.24,1.96.73c.45.49.68,1.17.68,2.06v5.82c0,.89-.23,1.57-.68,2.06-.45.49-1.11.73-1.96.73s-1.51-.24-1.96-.73Zm2.86-1.95v-6.04c0-.73-.3-1.09-.9-1.09s-.9.36-.9,1.09v6.04c0,.73.3,1.09.9,1.09s.9-.36.9-1.09Z" />
                </g>
                <g>
                  <path d="m97.77,173.39v-1.58c.17.04.36.06.57.06.35,0,.61-.09.77-.26.17-.17.25-.44.25-.8v-8.5h1.74v8.45c0,.91-.21,1.58-.62,2.02-.42.44-1.05.67-1.91.67-.32,0-.59-.02-.81-.06Z" />
                  <path d="m108.84,162.32h4.75v1.58h-3.01v2.93h2.39v1.58h-2.39v3.4h3.01v1.58h-4.75v-11.07Z" />
                  <path d="m121.61,172.84c-.44-.47-.66-1.14-.66-2.01v-5.95c0-.87.22-1.54.66-2.01s1.07-.71,1.91-.71,1.47.24,1.91.71.66,1.14.66,2.01v1.17h-1.65v-1.28c0-.69-.29-1.03-.87-1.03s-.87.34-.87,1.03v6.19c0,.68.29,1.01.87,1.01s.87-.34.87-1.01v-1.69h1.65v1.57c0,.86-.22,1.53-.66,2.01s-1.07.71-1.91.71-1.47-.24-1.91-.71Z" />
                  <path d="m134.97,163.9h-1.82v-1.58h5.38v1.58h-1.82v9.49h-1.74v-9.49Z" />
                </g>
              </g>
              <g>
                <g>
                  <path d="m57.62,86.31h1.74v4.51h1.87v-4.51h1.74v11.07h-1.74v-4.98h-1.87v4.98h-1.74v-11.07Z" />
                  <path d="m70.75,86.31h4.75v1.58h-3.01v2.93h2.39v1.58h-2.39v3.4h3.01v1.58h-4.75v-11.07Z" />
                </g>
              </g>
            </g>
            <g>
              <g>
                <path d="m20.96,55.05c-.47.18-1.03.14-1.68-.11l-.46-.18.46-1.19.55.21c.52.2.86.08,1.03-.35.08-.21.08-.4,0-.56-.08-.16-.27-.29-.55-.4-.34-.13-.66-.17-.98-.12-.32.05-.73.22-1.25.49-.66.34-1.21.54-1.67.6-.45.06-.91,0-1.37-.18-.63-.25-1.06-.6-1.28-1.05-.22-.46-.21-.99.02-1.6.23-.6.58-.99,1.05-1.17.47-.17,1.03-.13,1.67.12l.33.13-.46,1.19-.41-.16c-.27-.11-.5-.13-.66-.07s-.29.19-.37.4c-.16.42.01.73.52.93.29.11.59.14.9.08.31-.06.73-.22,1.25-.5.66-.35,1.22-.55,1.67-.6.45-.05.93.02,1.43.21.66.26,1.1.61,1.32,1.07.23.46.22,1-.02,1.62-.24.61-.59,1-1.06,1.18Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m17.56,45.36l-.63,1.26-1.1-.55,1.86-3.74,1.1.55-.63,1.27,6.6,3.28-.6,1.21-6.6-3.28Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m19.23,39.61l.69-1.16,7.39,4.38-.69,1.16-7.39-4.38Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m23.37,35.36l-.81,1.16-1.01-.7,2.39-3.42,1.01.7-.81,1.16,6.04,4.22-.77,1.11-6.04-4.22Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m32.4,34.81c-.5.02-1.01-.18-1.52-.61l-3.54-2.97c-.51-.43-.8-.9-.87-1.39-.06-.5.11-.99.53-1.49.42-.5.88-.75,1.38-.78.5-.02,1.01.18,1.52.61l.7.58-.82.98-.76-.64c-.41-.34-.76-.34-1.04,0-.29.34-.23.69.18,1.03l3.68,3.09c.4.34.75.33,1.04-.01.29-.35.23-.69-.17-1.02l-1.01-.84.82-.98.93.78c.51.43.8.9.87,1.39.06.5-.11.99-.53,1.49-.42.5-.87.75-1.37.78Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m30.67,24.42l.96-.95,2.46,2.49,1.03-1.02-2.46-2.49.96-.95,6.03,6.12-.96.95-2.72-2.75-1.03,1.02,2.72,2.75-.96.95-6.04-6.12Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m36.24,19.2l1.03-.87,5.54,6.57-1.03.87-5.54-6.57Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m40.01,16.12l1.38-.99,4.06,3.42h.02s-2.99-4.2-2.99-4.2l.98-.7,5,6.99-1.13.81-4.97-4.16h-.02s3.65,5.12,3.65,5.12l-.98.7-5-6.99Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m50.96,18.56c-.48-.15-.9-.53-1.25-1.13l-2.26-3.91c-.35-.6-.47-1.15-.36-1.65.11-.49.45-.91,1.02-1.23.57-.33,1.09-.42,1.58-.27.48.15.9.53,1.25,1.13l.37.64-1.11.64-.41-.71c-.28-.49-.63-.62-1.03-.38-.4.23-.46.6-.18,1.08l2.36,4.07c.28.48.62.61,1.02.37.4-.23.47-.59.19-1.07l-.84-1.46-.58.34-.62-1.06,1.69-.98,1.41,2.43c.35.6.47,1.15.36,1.65-.11.49-.45.91-1.02,1.23s-1.09.42-1.58.27Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m56.77,6.44l1.25-.52,3.3,7.94-1.25.52-3.3-7.94Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m61.31,4.62l1.84-.58,2.67,5.61h.02s-1.03-6.13-1.03-6.13l1.84-.58,2.59,8.2-1.22.38-1.96-6.21h-.02s1.02,6.51,1.02,6.51l-1.08.34-2.9-5.91h-.02s1.96,6.21,1.96,6.21l-1.12.35-2.59-8.2Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m70.25,2.05l1.95-.39c.66-.13,1.19-.06,1.59.23.4.29.67.77.81,1.45l.17.83c.14.68.08,1.23-.18,1.65-.26.42-.72.7-1.37.83l-.63.13.69,3.43-1.32.27-1.7-8.43Zm2.72,3.4c.22-.04.37-.14.45-.28.08-.14.1-.36.04-.65l-.2-1c-.06-.29-.15-.48-.29-.58-.13-.1-.31-.13-.52-.08l-.63.13.52,2.59.63-.13Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m78.02.71l1.82-.2,2.35,8.39-1.34.15-.43-1.67v.02s-1.52.17-1.52.17l-.06,1.7-1.24.14.43-8.7Zm2.1,5.55l-1.07-4.16h-.02s-.11,4.29-.11,4.29l1.21-.14Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m84.99,8.32c-.35-.36-.53-.88-.54-1.55l-.09-4.62c-.01-.67.15-1.19.48-1.57.33-.37.82-.57,1.47-.58s1.14.16,1.49.52c.35.36.53.88.54,1.55l.02.91-1.28.02-.02-.99c-.01-.53-.24-.79-.69-.79s-.67.28-.66.81l.09,4.8c0,.52.24.78.69.77.45,0,.67-.27.66-.8l-.03-1.31,1.28-.02.02,1.22c.01.67-.15,1.19-.48,1.57-.33.37-.82.57-1.47.58-.65.01-1.14-.16-1.49-.52Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m92.63,1.48l-1.41-.1.09-1.22,4.16.29-.08,1.22-1.41-.1-.51,7.35-1.35-.09.51-7.35Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m103.66,2.94l-1.38-.3.26-1.2,4.08.88-.26,1.2-1.38-.3-1.54,7.21-1.32-.28,1.54-7.21Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m109.74,3.15l1.29.41-1.05,3.34,1.38.44,1.05-3.34,1.29.41-2.58,8.2-1.29-.41,1.16-3.69-1.38-.44-1.16,3.69-1.29-.41,2.58-8.2Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m117.11,5.65l1.84.78c.64.27,1.04.62,1.21,1.04.17.42.12.94-.14,1.56l-.21.49c-.35.82-.84,1.22-1.48,1.21v.02c.25.22.39.5.39.83,0,.33-.09.73-.29,1.2l-.59,1.39c-.1.23-.17.41-.21.56-.04.15-.07.3-.06.46l-1.27-.54c0-.15.03-.28.06-.4.03-.12.11-.33.24-.62l.62-1.45c.15-.36.2-.64.15-.83s-.23-.35-.51-.47l-.43-.18-1.44,3.39-1.24-.53,3.37-7.91Zm.25,4.11c.25.11.46.12.64.04.18-.07.33-.26.46-.56l.26-.61c.12-.29.16-.52.11-.69-.05-.17-.18-.3-.4-.4l-.56-.24-.96,2.26.45.19Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m120.48,16.14c-.13-.5-.03-1.05.3-1.65l2.16-3.97c.33-.6.74-.99,1.23-1.15.49-.16,1.02-.08,1.61.23.58.32.94.72,1.07,1.22.13.5.03,1.05-.3,1.66l-2.16,3.97c-.33.6-.74.99-1.23,1.15-.49.16-1.03.09-1.61-.23-.58-.32-.94-.73-1.07-1.22Zm2.67-.26l2.24-4.12c.27-.5.2-.86-.21-1.08-.41-.22-.75-.09-1.02.41l-2.24,4.12c-.27.5-.2.86.21,1.08.41.22.75.09,1.02-.41Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m126.32,19.53c-.08-.5.08-1.04.47-1.62l3.66-5.44,1.12.75-3.72,5.52c-.17.25-.23.45-.21.63.02.17.13.32.31.45.18.12.36.16.53.12.17-.04.34-.19.5-.43l3.72-5.52,1.08.73-3.66,5.44c-.39.58-.83.92-1.32,1.04-.49.12-1.01,0-1.55-.37-.54-.37-.85-.8-.93-1.3Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m131.79,23.42c-.03-.51.18-1.03.62-1.57l2.86-3.5c.44-.54.91-.84,1.41-.91s1.01.1,1.51.52c.51.41.77.88.8,1.38.03.51-.18,1.03-.62,1.57l-.47.57-.99-.81.52-.64c.36-.44.36-.8,0-1.1-.36-.3-.72-.22-1.08.21l-2.98,3.64c-.35.43-.35.79.01,1.09.36.29.72.23,1.07-.2l1.07-1.3-.52-.43.78-.95,1.51,1.24-1.78,2.18c-.44.54-.91.84-1.42.91-.5.07-1.01-.1-1.51-.52-.51-.41-.78-.88-.8-1.38Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m142.24,21.65l.96.95-2.46,2.48,1.03,1.02,2.46-2.48.96.95-6.05,6.1-.96-.95,2.72-2.75-1.03-1.02-2.72,2.75-.96-.95,6.05-6.1Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m150.34,30.53l.81,1.08-5.89,4.43,1.34,1.78-.98.74-2.15-2.86,6.87-5.17Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m154.23,35.96l.73,1.14-7.23,4.65-.73-1.13,7.23-4.66Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m156.59,39.73l.65,1.2-5.44,3.96v.02s6.29-2.4,6.29-2.4l.59,1.09-8.18,2.95-.86-1.58,6.94-5.24Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m160.08,46.51l1.46,3.38-1.13.49-.92-2.14-2.09.9.73,1.7-1.13.49-.73-1.7-2.43,1.04.92,2.14-1.13.49-1.46-3.38,7.89-3.4Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m155.04,55.81c.25-.44.71-.76,1.37-.98l.47-.15.4,1.21-.56.18c-.53.17-.72.48-.57.92.07.22.19.36.35.43.17.07.39.06.68-.04.34-.11.62-.29.83-.53.21-.24.43-.63.66-1.17.29-.68.59-1.19.9-1.52s.7-.58,1.17-.73c.65-.21,1.2-.21,1.66,0,.46.21.79.63,1,1.25.2.61.18,1.14-.07,1.57-.25.43-.71.75-1.37.97l-.34.11-.4-1.21.42-.14c.28-.09.47-.21.56-.36.09-.15.1-.33.04-.54-.14-.43-.47-.56-.99-.38-.3.1-.55.27-.75.51-.2.24-.42.64-.65,1.18-.29.69-.59,1.2-.91,1.53-.32.33-.73.58-1.24.74-.67.22-1.24.22-1.7,0-.47-.21-.8-.63-1.01-1.26-.21-.62-.18-1.15.07-1.59Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m18.57,177.5c.3-.4.8-.67,1.48-.8l.48-.09.24,1.25-.58.11c-.55.1-.78.39-.69.85.04.22.14.38.3.47.16.09.38.11.68.05.35-.07.65-.21.89-.42.24-.21.51-.57.8-1.08.38-.64.74-1.1,1.09-1.4.35-.29.77-.49,1.26-.58.67-.13,1.22-.06,1.65.21.43.27.71.72.83,1.37.12.64.03,1.15-.27,1.55-.3.4-.8.66-1.48.79l-.35.07-.24-1.25.43-.08c.29-.06.49-.15.6-.29.11-.14.15-.32.1-.53-.08-.44-.4-.61-.94-.51-.31.06-.58.2-.81.41-.23.21-.5.58-.79,1.08-.38.65-.74,1.11-1.1,1.4-.35.29-.8.48-1.33.58-.69.13-1.26.06-1.69-.21-.44-.27-.72-.73-.84-1.38-.12-.64-.03-1.17.27-1.57Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m26.96,183.14l-.4-1.36,1.18-.35,1.19,4-1.18.35-.4-1.36-7.07,2.1-.39-1.29,7.07-2.1Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m29.74,187.62l.49,1.26-8.01,3.12-.49-1.26,8.02-3.12Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m30.62,192.85l-.62-1.27,1.1-.54,1.83,3.76-1.1.54-.62-1.27-6.63,3.24-.59-1.21,6.63-3.24Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m27.3,201.38c.14-.48.49-.9,1.06-1.25l3.93-2.43c.57-.35,1.1-.48,1.6-.39.49.1.91.42,1.25.97.34.55.44,1.07.31,1.55-.14.48-.49.9-1.06,1.25l-.77.48-.67-1.09.85-.52c.45-.28.56-.61.32-1-.24-.38-.58-.43-1.04-.15l-4.09,2.53c-.45.28-.55.61-.31.99.24.38.58.44,1.02.16l1.12-.69.67,1.09-1.04.64c-.57.35-1.1.48-1.6.39-.49-.09-.91-.42-1.25-.97-.34-.55-.44-1.07-.31-1.55Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m37.43,201.99l.83,1.07-2.77,2.14.89,1.15,2.77-2.14.83,1.07-6.81,5.26-.83-1.07,3.06-2.37-.89-1.15-3.06,2.37-.83-1.07,6.81-5.26Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m41.76,207.31l.92.99-6.32,5.83-.92-.99,6.32-5.83Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m44.52,210.22l1.25,1.14-2.49,4.7.02.02,3.47-3.81.89.81-5.79,6.36-1.03-.94,3.03-5.74-.02-.02-4.23,4.64-.89-.81,5.79-6.36Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m45.19,221.56c-.06-.5.12-1.04.53-1.6l2.67-3.65c.41-.56.87-.89,1.36-.99.5-.1,1.01.05,1.54.44.53.39.82.83.88,1.34.06.5-.12,1.04-.53,1.6l-.44.59-1.03-.75.49-.66c.33-.46.31-.82-.06-1.1-.38-.28-.73-.19-1.07.27l-2.78,3.8c-.33.45-.31.81.07,1.09.38.28.73.19,1.06-.26l1-1.36-.55-.4.73-.99,1.58,1.15-1.66,2.27c-.41.56-.87.89-1.36.99-.5.1-1.01-.05-1.54-.43-.53-.39-.82-.83-.88-1.34Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m58.18,220.27l1.19.63-4.04,7.6-1.19-.63,4.04-7.6Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m61.73,222.14l1.79.73-1.54,6.02h.02s3.13-5.36,3.13-5.36l1.79.73-3.27,7.96-1.18-.49,2.47-6.03h-.02s-3.38,5.64-3.38,5.64l-1.05-.43,1.56-6.4h-.02s-2.47,6.02-2.47,6.02l-1.09-.45,3.27-7.96Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m69.36,225.04l1.92.54c.65.18,1.08.49,1.31.93s.25.99.06,1.66l-.23.82c-.19.67-.49,1.13-.91,1.39-.42.26-.95.29-1.6.11l-.62-.17-.94,3.37-1.3-.36,2.31-8.29Zm.88,4.26c.21.06.39.04.53-.04.14-.09.25-.28.33-.56l.27-.98c.08-.28.08-.5,0-.65s-.22-.25-.43-.31l-.62-.17-.71,2.54.62.17Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m76.13,226.72l1.8.32-.11,8.72-1.33-.23.05-1.73v.03s-1.52-.27-1.52-.27l-.53,1.62-1.23-.22,2.87-8.23Zm.46,5.92l.14-4.29h-.02s-1.32,4.08-1.32,4.08l1.2.21Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m81.35,235.7c-.31-.39-.44-.92-.4-1.59l.33-4.61c.05-.67.25-1.18.62-1.52.37-.34.87-.49,1.52-.45.65.05,1.12.27,1.44.66.31.39.44.92.4,1.59l-.07.91-1.28-.09.07-.99c.04-.53-.17-.81-.62-.84-.45-.03-.69.22-.73.75l-.35,4.79c-.04.52.17.8.62.83.45.03.69-.21.73-.74l.09-1.31,1.27.09-.09,1.21c-.05.67-.26,1.18-.62,1.52-.37.34-.87.49-1.52.45-.65-.05-1.12-.27-1.44-.66Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m88.91,229.04l-1.41.04-.03-1.23,4.18-.11.03,1.23-1.41.04.19,7.37-1.35.04-.19-7.37Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m98.87,228.11l-1.39.26-.22-1.21,4.11-.76.22,1.21-1.39.26,1.35,7.25-1.33.25-1.34-7.25Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m103.57,225.86l1.3-.38.99,3.36,1.39-.41-.99-3.36,1.29-.38,2.44,8.25-1.3.38-1.1-3.71-1.39.41,1.1,3.71-1.3.38-2.44-8.25Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m110,223.81l1.85-.77c.64-.27,1.17-.32,1.59-.14s.76.57,1.02,1.19l.2.49c.34.82.29,1.46-.16,1.91v.02c.35-.04.64.06.88.29.24.23.46.58.66,1.04l.58,1.39c.09.23.18.41.25.54.07.13.17.25.29.37l-1.27.53c-.1-.11-.18-.22-.24-.33-.06-.11-.16-.31-.28-.6l-.61-1.45c-.15-.36-.32-.59-.49-.69-.18-.09-.41-.08-.7.04l-.43.18,1.42,3.4-1.25.52-3.31-7.94Zm3.12,2.69c.25-.1.41-.25.48-.43.07-.18.04-.42-.08-.72l-.26-.61c-.12-.29-.26-.47-.41-.56-.16-.09-.34-.08-.56,0l-.57.24.95,2.27.45-.19Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m120.26,228.13c-.49-.16-.9-.54-1.23-1.15l-2.17-3.97c-.33-.6-.43-1.16-.3-1.66.13-.5.48-.91,1.07-1.23.58-.32,1.12-.4,1.61-.24.49.16.9.54,1.23,1.15l2.17,3.97c.33.6.43,1.16.3,1.66-.13.5-.48.91-1.07,1.23s-1.12.4-1.61.24Zm1.23-2.39l-2.25-4.12c-.27-.5-.61-.63-1.02-.41-.41.22-.48.58-.21,1.08l2.25,4.12c.27.5.61.63,1.02.41.41-.22.48-.58.21-1.08Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m126.67,224.35c-.49-.11-.94-.45-1.34-1.02l-3.74-5.39,1.11-.77,3.79,5.47c.17.24.34.38.51.42.17.04.35,0,.53-.13.18-.13.28-.28.31-.45.02-.17-.05-.38-.22-.63l-3.79-5.47,1.07-.74,3.74,5.39c.4.57.56,1.11.49,1.61-.07.5-.38.94-.91,1.31-.54.37-1.06.5-1.55.39Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m132.55,220.01c-.5-.06-.98-.35-1.44-.88l-2.95-3.43c-.45-.53-.67-1.05-.65-1.55s.28-.97.77-1.4c.5-.43,1-.61,1.5-.55s.98.35,1.44.88l.48.56-.97.83-.54-.62c-.37-.43-.73-.49-1.08-.19s-.35.67.02,1.1l3.07,3.57c.36.42.72.48,1.08.18.35-.3.35-.67-.01-1.09l-1.1-1.28-.51.44-.8-.93,1.48-1.27,1.83,2.14c.45.53.67,1.05.65,1.55-.02.51-.28.97-.77,1.4-.5.43-1,.61-1.5.55Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m131.68,209.82l.93-.98,2.55,2.4,1-1.05-2.55-2.4.93-.98,6.26,5.9-.93.98-2.81-2.66-1,1.05,2.82,2.66-.93.98-6.26-5.9Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m138.47,201.83l.76-1.12,6.1,4.14,1.25-1.84,1.02.69-2.01,2.96-7.12-4.83Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m141.67,196.87l.67-1.18,7.48,4.24-.67,1.18-7.48-4.24Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m143.46,193.63l.57-1.24,6.43,1.99v-.02s-5.68-3.6-5.68-3.6l.52-1.13,7.27,4.78-.75,1.63-8.36-2.41Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m146.12,187.51l1.2-3.49,1.16.4-.76,2.21,2.15.74.6-1.76,1.16.4-.6,1.75,2.5.86.76-2.21,1.16.4-1.2,3.49-8.13-2.79Z" />
              </g>
            </g>
            <g>
              <g>
                <path d="m155.99,183.35c-.44.24-1,.28-1.68.12l-.48-.11.29-1.24.58.13c.54.13.87-.04.97-.49.05-.22.03-.41-.08-.55-.1-.15-.3-.25-.6-.32-.35-.08-.68-.08-.98.02s-.7.32-1.17.66c-.61.43-1.13.71-1.57.83s-.9.13-1.39.01c-.66-.16-1.13-.44-1.42-.87-.28-.42-.35-.95-.2-1.59.15-.63.44-1.06.88-1.3.44-.24,1-.28,1.68-.12l.35.08-.29,1.24-.43-.1c-.29-.07-.51-.06-.67.02s-.26.23-.31.44c-.1.44.11.72.65.85.3.07.61.06.91-.04s.69-.32,1.17-.67c.61-.44,1.13-.71,1.57-.83.44-.12.92-.11,1.45.01.69.16,1.17.46,1.46.88s.35.96.2,1.61c-.15.64-.45,1.08-.89,1.32Z" />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};