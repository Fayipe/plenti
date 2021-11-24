import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryCodesService {
  private _countryCodes = [
    {
      name: 'Albania',
      dialCode: '+355',
      code: 'AL'
    },
    {
      name: 'Algeria',
      dialCode: '+213',
      code: 'DZ'
    },
    {
      name: 'Angola',
      dialCode: '+244',
      code: 'AO'
    },
    {
      name: 'Argentina',
      dialCode: '+54',
      code: 'AR'
    },
    {
      name: 'Australia',
      dialCode: '+61',
      code: 'AU'
    },
    {
      name: 'Austria',
      dialCode: '+43',
      code: 'AT'
    },
    {
      name: 'Bahamas',
      dialCode: '+1242',
      code: 'BS'
    },
    {
      name: 'Barbados',
      dialCode: '+1246',
      code: 'BB'
    },
    {
      name: 'Belarus',
      dialCode: '+375',
      code: 'BY'
    },
    {
      name: 'Belgium',
      dialCode: '+32',
      code: 'BE'
    },
    {
      name: 'Benin',
      dialCode: '+229',
      code: 'BJ'
    },
    {
      name: 'Bolivia',
      dialCode: '+591',
      code: 'BO'
    },
    {
      name: 'Bosnia and Herzegovina',
      dialCode: '+387',
      code: 'BA'
    },
    {
      name: 'Botswana',
      dialCode: '+267',
      code: 'BW'
    },
    {
      name: 'Brazil',
      dialCode: '+55',
      code: 'BR'
    },
    {
      name: 'Brunei',
      dialCode: '+673',
      code: 'BN'
    },
    {
      name: 'Bulgaria',
      dialCode: '+359',
      code: 'BG'
    },
    {
      name: 'Burkina Faso',
      dialCode: '+226',
      code: 'BF'
    },
    {
      name: 'Burundi',
      dialCode: '+257',
      code: 'BI'
    },
    {
      name: 'Cameroon',
      dialCode: '+237',
      code: 'CM'
    },
    {
      name: 'Canada',
      dialCode: '+1',
      code: 'CA'
    },
    {
      name: 'Cape Verde',
      dialCode: '+238',
      code: 'CV'
    },
    {
      name: 'Central African Republic',
      dialCode: '+236',
      code: 'CF'
    },
    {
      name: 'Chad',
      dialCode: '+235',
      code: 'TD'
    },
    {
      name: 'Chile',
      dialCode: '+56',
      code: 'CL'
    },
    {
      name: 'China',
      dialCode: '+86',
      code: 'CN'
    },
    {
      name: 'Colombia',
      dialCode: '+57',
      code: 'CO'
    },
    {
      name: 'Congo-Brazzaville',
      dialCode: '+242',
      code: 'CG'
    },
    {
      name: 'The DRC',
      dialCode: '+243',
      code: 'CD'
    },
    {
      name: 'Costa Rica',
      dialCode: '+506',
      code: 'CR'
    },
    {
      name: 'Cote d\'Ivoire',
      dialCode: '+225',
      code: 'CI'
    },
    {
      name: 'Croatia',
      dialCode: '+385',
      code: 'HR'
    },
    {
      name: 'Cuba',
      dialCode: '+53',
      code: 'CU'
    },
    {
      name: 'Cyprus',
      dialCode: '+357',
      code: 'CY'
    },
    {
      name: 'Czech Republic',
      dialCode: '+420',
      code: 'CZ'
    },
    {
      name: 'Denmark',
      dialCode: '+45',
      code: 'DK'
    },
    {
      name: 'Djibouti',
      dialCode: '+253',
      code: 'DJ'
    },
    {
      name: 'Ecuador',
      dialCode: '+593',
      code: 'EC'
    },
    {
      name: 'Egypt',
      dialCode: '+20',
      code: 'EG'
    },
    {
      name: 'Equatorial Guinea',
      dialCode: '+240',
      code: 'GQ'
    },
    {
      name: 'Eritrea',
      dialCode: '+291',
      code: 'ER'
    },
    {
      name: 'Estonia',
      dialCode: '+372',
      code: 'EE'
    },
    {
      name: 'Ethiopia',
      dialCode: '+251',
      code: 'ET'
    },
    {
      name: 'Finland',
      dialCode: '+358',
      code: 'FI'
    },
    {
      name: 'France',
      dialCode: '+33',
      code: 'FR'
    },
    {
      name: 'Gabon',
      dialCode: '+241',
      code: 'GA'
    },
    {
      name: 'Gambia',
      dialCode: '+220',
      code: 'GM'
    },
    {
      name: 'Georgia',
      dialCode: '+995',
      code: 'GE'
    },
    {
      name: 'Germany',
      dialCode: '+49',
      code: 'DE'
    },
    {
      name: 'Ghana',
      dialCode: '+233',
      code: 'GH'
    },
    {
      name: 'Greece',
      dialCode: '+30',
      code: 'GR'
    },
    {
      name: 'Guinea',
      dialCode: '+224',
      code: 'GN'
    },
    {
      name: 'Guinea-Bissau',
      dialCode: '+245',
      code: 'GW'
    },
    {
      name: 'Haiti',
      dialCode: '+509',
      code: 'HT'
    },
    {
      name: 'Honduras',
      dialCode: '+504',
      code: 'HN'
    },
    {
      name: 'Hong Kong',
      dialCode: '+852',
      code: 'HK'
    },
    {
      name: 'Hungary',
      dialCode: '+36',
      code: 'HU'
    },
    {
      name: 'Iceland',
      dialCode: '+354',
      code: 'IS'
    },
    {
      name: 'India',
      dialCode: '+91',
      code: 'IN'
    },
    {
      name: 'Indonesia',
      dialCode: '+62',
      code: 'ID'
    },
    {
      name: 'Ireland',
      dialCode: '+353',
      code: 'IE'
    },
    {
      name: 'Israel',
      dialCode: '+972',
      code: 'IL'
    },
    {
      name: 'Italy',
      dialCode: '+39',
      code: 'IT'
    },
    {
      name: 'Jamaica',
      dialCode: '+1876',
      code: 'JM'
    },
    {
      name: 'Japan',
      dialCode: '+81',
      code: 'JP'
    },
    {
      name: 'Jordan',
      dialCode: '+962',
      code: 'JO'
    },
    {
      name: 'Kenya',
      dialCode: '+254',
      code: 'KE'
    },
    {
      name: 'Korea, South Korea',
      dialCode: '+82',
      code: 'KR'
    },
    {
      name: 'Kuwait',
      dialCode: '+965',
      code: 'KW'
    },
    {
      name: 'Laos',
      dialCode: '+856',
      code: 'LA'
    },
    {
      name: 'Latvia',
      dialCode: '+371',
      code: 'LV'
    },
    {
      name: 'Lebanon',
      dialCode: '+961',
      code: 'LB'
    },
    {
      name: 'Lesotho',
      dialCode: '+266',
      code: 'LS'
    },
    {
      name: 'Liberia',
      dialCode: '+231',
      code: 'LR'
    },
    {
      name: 'Libya',
      dialCode: '+218',
      code: 'LY'
    },
    {
      name: 'Liechtenstein',
      dialCode: '+423',
      code: 'LI'
    },
    {
      name: 'Lithuania',
      dialCode: '+370',
      code: 'LT'
    },
    {
      name: 'Luxembourg',
      dialCode: '+352',
      code: 'LU'
    },
    {
      name: 'Macao',
      dialCode: '+853',
      code: 'MO'
    },
    {
      name: 'Macedonia',
      dialCode: '+389',
      code: 'MK'
    },
    {
      name: 'Madagascar',
      dialCode: '+261',
      code: 'MG'
    },
    {
      name: 'Malawi',
      dialCode: '+265',
      code: 'MW'
    },
    {
      name: 'Malaysia',
      dialCode: '+60',
      code: 'MY'
    },
    {
      name: 'Mali',
      dialCode: '+223',
      code: 'ML'
    },
    {
      name: 'Malta',
      dialCode: '+356',
      code: 'MT'
    },
    {
      name: 'Mauritania',
      dialCode: '+222',
      code: 'MR'
    },
    {
      name: 'Mauritius',
      dialCode: '+230',
      code: 'MU'
    },
    {
      name: 'Mexico',
      dialCode: '+52',
      code: 'MX'
    },
    {
      name: 'Montenegro',
      dialCode: '+382',
      code: 'ME'
    },
    {
      name: 'Morocco',
      dialCode: '+212',
      code: 'MA'
    },
    {
      name: 'Mozambique',
      dialCode: '+258',
      code: 'MZ'
    },
    {
      name: 'Namibia',
      dialCode: '+264',
      code: 'NA'
    },
    {
      name: 'Netherlands',
      dialCode: '+31',
      code: 'NL'
    },
    {
      name: 'New Zealand',
      dialCode: '+64',
      code: 'NZ'
    },
    {
      name: 'Niger',
      dialCode: '+227',
      code: 'NE'
    },
    {
      name: 'Nigeria',
      dialCode: '+234',
      code: 'NG'
    },
    {
      name: 'Norway',
      dialCode: '+47',
      code: 'NO'
    },
    {
      name: 'Panama',
      dialCode: '+507',
      code: 'PA'
    },
    {
      name: 'Papua New Guinea',
      dialCode: '+675',
      code: 'PG'
    },
    {
      name: 'Paraguay',
      dialCode: '+595',
      code: 'PY'
    },
    {
      name: 'Peru',
      dialCode: '+51',
      code: 'PE'
    },
    {
      name: 'Philippines',
      dialCode: '+63',
      code: 'PH'
    },
    {
      name: 'Poland',
      dialCode: '+48',
      code: 'PL'
    },
    {
      name: 'Portugal',
      dialCode: '+351',
      code: 'PT'
    },
    {
      name: 'Puerto Rico',
      dialCode: '+1939',
      code: 'PR'
    },
    {
      name: 'Qatar',
      dialCode: '+974',
      code: 'QA'
    },
    {
      name: 'Romania',
      dialCode: '+40',
      code: 'RO'
    },
    {
      name: 'Russia',
      dialCode: '+7',
      code: 'RU'
    },
    {
      name: 'Rwanda',
      dialCode: '+250',
      code: 'RW'
    },
    {
      name: 'Sao Tome and Principe',
      dialCode: '+239',
      code: 'ST'
    },
    {
      name: 'Saudi Arabia',
      dialCode: '+966',
      code: 'SA'
    },
    {
      name: 'Senegal',
      dialCode: '+221',
      code: 'SN'
    },
    {
      name: 'Serbia',
      dialCode: '+381',
      code: 'RS'
    },
    {
      name: 'Seychelles',
      dialCode: '+248',
      code: 'SC'
    },
    {
      name: 'Sierra Leone',
      dialCode: '+232',
      code: 'SL'
    },
    {
      name: 'Singapore',
      dialCode: '+65',
      code: 'SG'
    },
    {
      name: 'Slovakia',
      dialCode: '+421',
      code: 'SK'
    },
    {
      name: 'Slovenia',
      dialCode: '+386',
      code: 'SI'
    },
    {
      name: 'Somalia',
      dialCode: '+252',
      code: 'SO'
    },
    {
      name: 'South Africa',
      dialCode: '+27',
      code: 'ZA'
    },
    {
      name: 'South Sudan',
      dialCode: '+211',
      code: 'SS'
    },
    {
      name: 'Spain',
      dialCode: '+34',
      code: 'ES'
    },
    {
      name: 'Sri Lanka',
      dialCode: '+94',
      code: 'LK'
    },
    {
      name: 'Sudan',
      dialCode: '+249',
      code: 'SD'
    },
    {
      name: 'Swaziland',
      dialCode: '+268',
      code: 'SZ'
    },
    {
      name: 'Sweden',
      dialCode: '+46',
      code: 'SE'
    },
    {
      name: 'Switzerland',
      dialCode: '+41',
      code: 'CH'
    },
    {
      name: 'Taiwan',
      dialCode: '+886',
      code: 'TW'
    },
    {
      name: 'Tanzania',
      dialCode: '+255',
      code: 'TZ'
    },
    {
      name: 'Thailand',
      dialCode: '+66',
      code: 'TH'
    },
    {
      name: 'Togo',
      dialCode: '+228',
      code: 'TG'
    },
    {
      name: 'Trinidad and Tobago',
      dialCode: '+1868',
      code: 'TT'
    },
    {
      name: 'Tunisia',
      dialCode: '+216',
      code: 'TN'
    },
    {
      name: 'Turkey',
      dialCode: '+90',
      code: 'TR'
    },
    {
      name: 'Uganda',
      dialCode: '+256',
      code: 'UG'
    },
    {
      name: 'Ukraine',
      dialCode: '+380',
      code: 'UA'
    },
    {
      name: 'United Arab Emirates',
      dialCode: '+971',
      code: 'AE'
    },
    {
      name: 'United Kingdom',
      dialCode: '+44',
      code: 'GB'
    },
    {
      name: 'United States',
      dialCode: '+1',
      code: 'US'
    },
    {
      name: 'Uruguay',
      dialCode: '+598',
      code: 'UY'
    },
    {
      name: 'Venezuela',
      dialCode: '+58',
      code: 'VE'
    },
    {
      name: 'Vietnam',
      dialCode: '+84',
      code: 'VN'
    },
    {
      name: 'Zambia',
      dialCode: '+260',
      code: 'ZM'
    },
    {
      name: 'Zimbabwe',
      dialCode: '+263',
      code: 'ZW'
    }
  ];

  constructor() { }

  get countryCodes() {
    return [...this._countryCodes];
  }
}
