import React from 'react';
import PropTypes from 'prop-types';

const Bear = ({ className, size, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <g>
      <path
        fill="#512807"
        d="M494.131,203.229c-13.444-26.314-49.864-28.851-51.409-28.945c-2.317-0.151-4.599,0.68-6.294,2.274
		c-1.695,1.594-2.655,3.817-2.655,6.144c0,2.085,0.773,4.096,2.168,5.644c12.257,13.604,21.289,30.646,26.852,50.669
		c-0.158,4.218-0.409,17.203,1.501,34.072c0.401,3.553,3.002,6.467,6.487,7.268c0.631,0.145,1.263,0.215,1.891,0.215
		c2.844,0,5.553-1.443,7.121-3.919C498.836,246.585,503.661,221.882,494.131,203.229z"
      />
      <path
        fill="#512807"
        d="M110.38,170.251c-4.076-38.368-37.86-35.654-38.197-35.619c-4.332,0.406-7.644,4.042-7.644,8.394
		v44.858c0,2.873,1.462,5.547,3.88,7.097c1.38,0.885,2.962,1.333,4.55,1.333c1.197,0,2.399-0.255,3.52-0.77
		c9.749-4.478,19.649-10.185,30.267-17.444C109.314,176.349,110.708,173.334,110.38,170.251z"
      />
      <path
        fill="#512807"
        d="M298.768,324.38c-0.106-4.049-3.076-7.449-7.073-8.1c-31.574-5.14-52.757-12.075-52.962-12.145
		c-3.093-1.022-6.498-0.174-8.748,2.181c-2.25,2.356-2.941,5.797-1.776,8.839l12.869,33.585l-9.724,13.78
		c-19.18,3.504-27.282,22.887-28.905,33.32c-0.379,2.434,0.326,4.91,1.928,6.78c1.602,1.869,3.941,2.946,6.403,2.946h53.962
		c2.647,0,5.142-1.244,6.734-3.359l26.577-35.293c1.147-1.522,1.743-3.388,1.693-5.292L298.768,324.38z"
      />
      <path
        fill="#512807"
        d="M416.696,322.335c-1.739-3.011-5.151-4.654-8.586-4.116c-21.687,3.344-45.103,4.393-69.595,3.12
		c-2.321-0.123-4.565,0.715-6.242,2.305c-1.676,1.592-2.626,3.803-2.626,6.114v38.018c-1.972,1.623-4.577,3.881-7.241,6.515
		c-8.053,7.958-12.423,15.045-13.361,21.663c-0.343,2.418,0.38,4.866,1.982,6.71c1.602,1.845,3.923,2.904,6.366,2.904h44.555
		c2.9,0,5.597-1.491,7.14-3.947c0.328-0.524,33.03-52.54,46.882-69.793C418.146,329.118,418.435,325.346,416.696,322.335z"
      />
    </g>
    <path
      fill="#A86B38"
      d="M510.05,349.624c-33.982-40.849-30.401-110.367-30.36-111.058c0.053-0.905-0.039-1.811-0.275-2.687
	c-12.323-45.814-40.468-77.565-83.652-94.371c-28.476-11.081-63.326-15.584-106.541-13.771
	c-31.658,1.334-47.871-5.886-62.175-12.253c-11.663-5.191-22.674-10.102-38.486-8.856c-19.529,1.531-38.531,16.689-60.535,34.24
	c-17.532,13.984-37.402,29.833-59.529,39.803c-44.511,20.055-47.414,49.165-46.611,60.724L2.309,262.072
	c-1.996,2.109-2.767,5.097-2.039,7.908c6.082,23.51,41.598,36.743,45.628,38.174c2.186,0.776,4.598,0.618,6.661-0.44
	c37.818-19.341,50.392-9.802,51.816-8.528c1.369,2.184,3.469,3.294,6.066,3.554c2.679,0.279,5.073-1.107,6.869-3.101
	c5.68-6.301,16.817-13.223,25.926-18.216c-0.013,2.232-0.065,4.504-0.169,6.81c-1.509,33.549-12.121,57.839-31.547,72.22
	c-6.547,2.099-29.692,11.151-33.953,35.213c-0.435,2.455,0.239,4.976,1.841,6.886c1.602,1.911,3.967,3.015,6.46,3.015h52.512
	c1.39,0,2.76-0.344,3.985-1.002l54.102-29.016c0.622-0.334,1.199-0.744,1.719-1.222c0.887-0.815,21.96-20.33,41.439-51.724
	c0.099-0.16,0.193-0.32,0.292-0.481c16.651,4.829,63.009,16.64,118.138,16.64c15.125,0,30.913-0.899,46.925-3.066
	c3.512,5.504,7.521,10.229,12.052,14.118c9.131,7.837,18.455,10.61,25.111,11.504l0.327,8.473
	c-10.496,9.549-13.644,23.915-13.998,25.69c-0.495,2.476,0.146,5.045,1.748,6.997c1.601,1.953,3.994,3.086,6.52,3.086h46.942
	c3.261,0,6.231-1.882,7.624-4.831l19.891-42.122C512.593,355.652,512.148,352.145,510.05,349.624z"
    />
    <g>
      <path
        fill="#8C4A14"
        d="M110.438,302.741c2.679,0.279,5.073-1.107,6.869-3.101c5.68-6.301,16.817-13.223,25.926-18.216
		c4.499-30.906,1.079-61.193,1.079-61.193c-19.271,20.216-32.096,58.052-37.222,81.525
		C108.079,302.293,109.201,302.616,110.438,302.741z"
      />
      <path
        fill="#8C4A14"
        d="M448.793,238.07c0,0-4.304,72.954,32.295,116.946l-23.919,50.551h26.51
		c3.261,0,6.231-1.882,7.624-4.831l19.891-42.122c1.399-2.964,0.954-6.471-1.143-8.992c-33.982-40.849-30.401-110.367-30.36-111.058
		c0.053-0.905-0.039-1.811-0.275-2.687c-12.323-45.814-40.468-77.565-83.652-94.371c-28.476-11.081-63.326-15.584-106.541-13.771
		C346.823,129.509,426.401,154.829,448.793,238.07z"
      />
      <path
        fill="#8C4A14"
        d="M397.113,245.112c0,0-25.131,38.153-18.497,93.073c8.67-0.484,17.478-1.285,26.361-2.486
		C404.977,335.698,394.287,315.422,397.113,245.112z"
      />
      <path
        fill="#8C4A14"
        d="M261.699,211.74c-0.416-4.383-1.861-13.775-3.778-25.301c-5.022,23.265-14.125,57.456-29.677,93.617
		v0.001c-19.828,49.203-58.247,82.901-58.247,82.901l-87.513,41.892c1.054,0.462,2.202,0.717,3.381,0.717h52.512
		c1.39,0,2.76-0.344,3.985-1.002l54.102-29.016c0.622-0.334,1.199-0.744,1.719-1.222c0.887-0.815,21.96-20.33,41.439-51.724
		c0.099-0.16,0.193-0.32,0.292-0.481c0.082,0.024,0.176,0.051,0.261,0.075C253.625,291.359,265.471,251.516,261.699,211.74z"
      />
    </g>
    <path
      d="M66.68,245.587c-5.347,0-9.697-4.342-9.697-9.681c0-5.338,4.35-9.682,9.697-9.682c5.348,0,9.699,4.343,9.699,9.682
	C76.377,241.245,72.027,245.587,66.68,245.587z"
    />
    <path
      d="M19.67,292.264c-1.954,0-3.907-0.677-5.483-2.027c-7.394-6.332-12.077-13.146-13.917-20.257
	c-0.727-2.811,0.043-5.799,2.039-7.908l11.235-11.867c2.911-3.073,7.648-3.513,11.073-1.029c1.14,0.826,11.141,8.417,11.486,20.269
	c0.154,5.273-1.647,13.182-11.095,20.912C23.454,291.63,21.561,292.264,19.67,292.264z"
    />
  </svg>
);

Bear.defaultProps = {
  className: null,
  size: '64px',
};

Bear.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

export default Bear;
