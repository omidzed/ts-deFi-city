import { CoinProvider } from './Components/AppContext';
import { useDarkMode } from './utils/useDarkMode';
import { HomePage } from './Components/HomePage';

const App = () => {
	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<div onClick={toggleDarkMode}>
			<CoinProvider>
				<HomePage
					isDarkMode={isDarkMode}
					toggleDarkMode={toggleDarkMode}
				/>
			</CoinProvider>
		</div>
	);
};

export default App;

// const prices= [
//   [
//     1708653653038,
//     51290.46384473216
//   ],
//   [
//     1708657287489,
//     51095.29306783685
//   ],
//   [
//     1708660928603,
//     51067.967072300395
//   ],
//   [
//     1708664513569,
//     51201.271638117025
//   ],
//   [
//     1708668077437,
//     51124.97620014934
//   ],
//   [
//     1708671648428,
//     51289.85201499646
//   ],
//   [
//     1708675239477,
//     50880.92367526176
//   ],
//   [
//     1708678893428,
//     50908.81488660626
// 	],]

//     [
//       1708682531761,
//       50949.359440781955
//     ],
//     [
//       1708686143633,
//       51166.195179806724
//     ],
//     [
//       1708689716847,
//       51210.2940639519
//     ],
//     [
//       1708693285923,
//       50983.584307534344
//     ],
//     [
//       1708696810789,
//       51051.37119011336
//     ],
//     [
//       1708700454098,
//       51102.27794973614
//     ],
//     [
//       1708704098934,
//       50910.394626552355
//     ],
//     [
//       1708707710421,
//       51023.57720713857
//     ],
//     [
//       1708711312566,
//       51135.962066839966
//     ],
//     [
//       1708714811299,
//       51131.27428819613
//     ],
//     [
//       1708718502994,
//       51080.37683198738
//     ],
//     [
//       1708722115878,
//       51091.530003433276
//     ],
//     [
//       1708725717927,
//       50985.782654840594
//     ],
//     [
//       1708729349338,
//       50773.475118871436
//     ],
//    [
//       1708732825434,
//       50841.081094770896
//     ],
//     [
//       1708736504267,
//       50863.48685286495
//     ],
//     [
//       1708740129072,
//       50607.52920064971
//     ],
//     [
//       1708743730524,
//       50788.125508990335
//     ],
//     [
//       1708747235964,
//       50848.88547504514
//     ],
//     [
//       1708750835677,
//       50950.327041790515
//     ],
//     [
//       1708754514835,
//       51054.130061598386
//     ],
//     [
//       1708758099039,
//       50962.224264356795
//     ],
//     [
//       1708761677690,
//       51050.048117445396
//     ],
//     [
//       1708765212056,
//       50982.60912739779
//     ],
//     [
//       1708768804629,
//       51065.08904770135
//     ],
//     [
//       1708772482834,
//       51068.9235454728
//     ],
//     [
//       1708776000873,
//       51127.62804168001
//     ],
//     [
//       1708779701943,
//       51073.36046728882
//     ],
//     [
//       1708783218072,
//       51131.48175102287
//     ],
//     [
//       1708786867952,
//       51094.447775398425
//     ],
//     [
//       1708790479332,
//       51112.86772237167
//     ],
//     [
//       1708794069850,
//       51208.34658039908
//     ],
//     [
//       1708797633115,
//       51697.48554467913
//     ],
//     [
//       1708801206507,
//       51484.681536061114
//     ],
//     [
//       1708804831899,
//       51599.12248105399
//     ],
//     [
//       1708808474602,
//       51513.39102333645
//     ],
//     [
//       1708812086589,
//       51558.64778532889
//     ],
//     [
//       1708815678178,
//       51573.73667905135
//     ],
//     [
//       1708819215580,
//       51553.096712831146
//     ],
//     [
//       1708822806963,
//       51485.262018375855
//     ],
//     [
//       1708826438995,
//       51614.216980192345
//     ],
//     [
//       1708830020494,
//       51545.32115884375
//     ],
//     [
//       1708833709618,
//       51621.629465192906
//     ],
//     [
//       1708837286075,
//       51627.64128004587
//     ],
//     [
//       1708840845904,
//       51699.201967815585
//     ],
//     [
//       1708844455984,
//       51735.61018071985
//     ],
//     [
//       1708848047889,
//       51726.82888554329
//     ],
//     [
//       1708851682493,
//       51619.54399665533
//     ],
//     [
//       1708855297028,
//       51631.8944123664
//     ],
//     [
//       1708858880004,
//       51576.56470709675
//     ],
//     [
//       1708862449163,
//       51654.025665677225
//     ],
//     [
//       1708866098631,
//       51682.02969592259
//     ],
//     [
//       1708869623658,
//       51631.39988867448
//     ],
//     [
//       1708873267407,
//       51731.35612456198
//     ],
//     [
//       1708876942340,
//       51509.00951660319
//     ],
//     [
//       1708880479690,
//       51405.50649460264
//     ],
//     [
//       1708884137786,
//       51556.434366413734
//     ],
//     [
//       1708887627158,
//       51538.633942542714
//     ],
//     [
//       1708891295636,
//       51680.84842899583
//     ],
//     [
//       1708894876782,
//       51730.0957098725
//     ],
//     [
//       1708898448420,
//       51774.377396554664
//     ],
//     [
//       1708902080677,
//       51701.55732383541
//     ],
//     [
//       1708905688282,
//       51725.35393162457
//     ],
//     [
//       1708909263412,
//       51674.530312562376
//     ],
//     [
//       1708912848734,
//       51458.999296344286
//     ],
//     [
//       1708916412926,
//       51449.58877439659
//     ],
//     [
//       1708920114768,
//       51556.22697206768
//     ],
//     [
//       1708923710804,
//       51549.89709261979
//     ],
//     [
//       1708927336030,
//       51572.065623970644
//     ],
//     [
//       1708930825823,
//       51498.098290461494
//     ],
//     [
//       1708934502891,
//       51300.41485157674
//     ],
//     [
//       1708938064291,
//       51278.663078190846
//     ],
//     [
//       1708941644605,
//       50926.780715974346
//     ],
//     [
//       1708945328089,
//       51180.839719248645
//     ],
//     [
//       1708948865895,
//       51104.85484650301
//     ],
//     [
//       1708952441228,
//       51177.737528338555
//     ],
//     [
//       1708956152688,
//       51231.644578738815
//     ],
//     [
//       1708959724910,
//       51690.697700635785
//     ],
//     [
//       1708963391515,
//       52847.175807956504
//     ],
//     [
//       1708966893125,
//       53394.43288905663
//     ],
//     [
//       1708970447366,
//       53443.62062782177
//     ],
//     [
//       1708974090474,
//       53633.072547559466
//     ],
//     [
//       1708977654511,
//       54455.91125142581
//     ],
//     [
//       1708981215611,
//       54685.05166599562
//     ],
//     [
//       1708984887113,
//       54628.95571513321
//     ],
//     [
//       1708988499623,
//       54675.40695784579
//     ],
//     [
//       1708992018129,
//       54478.191083122954
//     ],
//     [
//       1708995699572,
//       54580.139740714294
//     ],
//     [
//       1708999371707,
//       55672.854203004914
//     ],
//     [
//       1709002808418,
//       56318.200914074
//     ],
//     [
//       1709006526892,
//       55580.07369933234
//     ],
//     [
//       1709010064988,
//       55801.08659956298
//     ],
//     [
//       1709013945449,
//       56116.347347991315
//     ],
//     [
//       1709017242764,
//       56386.72475545337
//     ],
//     [
//       1709020942475,
//       56104.12682333932
//     ],
//     [
//       1709024444797,
//       56275.61320474057
//     ],
//     [
//       1709028067123,
//       56643.12554071901
//     ],
//     [
//       1709031669169,
//       56581.53705935442
//     ],
//     [
//       1709035318241,
//       56541.39108692869
//     ],
//     [
//       1709038896096,
//       56996.51844918365
//     ],
//     [
//       1709042481352,
//       57106.04893315183
//     ],
//     [
//       1709046022575,
//       56900.31296833004
//     ],
//     [
//       1709049653918,
//       56765.128743317684
//     ],
//     [
//       1709053246231,
//       57051.62669658581
//     ],
//     [
//       1709056843205,
//       56841.94128068301
//     ],
//     [
//       1709060452397,
//       57128.702536398945
//     ],
//     [
//       1709064094547,
//       57442.86321085786
//     ],
//     [
//       1709067645320,
//       56737.94085264713
//     ],
//     [
//       1709071267870,
//       56650.03245400538
//     ],
//     [
//       1709074805759,
//       56918.454940304226
//     ],
//     [
//       1709078423373,
//       57003.52673730811
//     ],
//     [
//       1709082057013,
//       56994.916552693576
//     ],
//     [
//       1709085642138,
//       56857.608882839384
//     ],
//     [
//       1709089268707,
//       56951.85869803529
//     ],
//     [
//       1709092914065,
//       56958.15831123478
//     ],
//     [
//       1709096454511,
//       57227.46105933989
//     ],
//     [
//       1709100079772,
//       57116.64046654168
//     ],
//     [
//       1709103641844,
//       57135.482349711136
//     ],
//     [
//       1709107224089,
//       58123.24153531823
//     ],
//     [
//       1709110959555,
//       59508.88968993828
//     ],
//     [
//       1709114533651,
//       59325.37345452618
//     ],
//     [
//       1709118014350,
//       59266.18106118569
//     ],
//     [
//       1709121709561,
//       58983.94738732378
//     ],
//     [
//       1709125229259,
//       59397.89259241082
//     ],
//     [
//       1709128968990,
//       60465.38088698786
//     ],
//     [
//       1709132493958,
//       61142.98509518815
//     ],
//     [
//       1709136097018,
//       60925.10725370209
//     ],
//     [
//       1709139685108,
//       62496.70796054818
//     ],
//     [
//       1709143248159,
//       61236.56819459582
//     ],
//     [
//       1709146914036,
//       61203.7868191401
//     ],
//     [
//       1709150492423,
//       61006.464690927794
//     ],
//     [
//       1709154071256,
//       60426.396959183345
//     ],
//     [
//       1709157666948,
//       60504.09754571494
//     ],
//     [
//       1709161213417,
//       61348.393440923515
//     ],
//     [
//       1709164870725,
//       62518.58004146406
//     ],
//     [
//       1709168455578,
//       61353.4196653466
//     ],
//     [
//       1709172121555,
//       61354.959518742406
//     ],
//     [
//       1709175763804,
//       61753.20998644972
//     ],
//     [
//       1709179471349,
//       61594.439045000516
//     ],
//     [
//       1709183000738,
//       62494.350476384025
//     ],
//     [
//       1709186417808,
//       62327.58781450792
//     ],
//     [
//       1709190059272,
//       62938.70597072361
//     ],
//     [
//       1709193736654,
//       62713.90519421873
//     ],
//     [
//       1709197227008,
//       62791.57565972651
//     ],
//     [
//       1709200851380,
//       62794.27161842451
//     ],
//     [
//       1709204505873,
//       62701.975438427515
//     ],
//     [
//       1709208048925,
//       62935.77379531405
//     ],
//     [
//       1709211638432,
//       62656.37152404855
//     ],
//     [
//       1709215228146,
//       62946.002884387686
//     ],
//     [
//       1709218873445,
//       62864.06830866907
//     ],
//     [
//       1709222425200,
//       62894.738255044256
//     ],
//     [
//       1709226149850,
//       62202.76775685036
//     ],
//     [
//       1709229678412,
//       60990.475367372026
//     ],
//     [
//       1709233288700,
//       60585.35760074892
//     ],
//     [
//       1709236886710,
//       61621.67903482536
//     ],
//     [
//       1709240407238,
//       62183.046816187816
//     ],
//     [
//       1709244025804,
//       61248.938610897836
//     ],
//     [
//       1709247633666,
//       61254.54420248091
//     ],
//     [
//       1709251303668,
//       61200.70004129649
//     ],
//     [
//       1709254901278,
//       61508.70820248523
//     ],
//     [
//       1709255798000,
//       61389.05790702154
//     ]
//   ],
//   "market_caps": [
//     [
//       1708653653038,
//       1008528551465.3491
//     ],
//     [
//       1708657287489,
//       1003262108631.5586
//     ],
//     [
//       1708660928603,
//       1002727806475.2838
//     ],
//     [
//       1708664513569,
//       1005433902865.8585
//     ],
//     [
//       1708668077437,
//       1003709060607.7955
//     ],
//     [
//       1708671648428,
//       1007265065368.1538
//     ],
//     [
//       1708675239477,
//       1000264516685.3918
//     ],
//     [
//       1708678893428,
//       998990767947.2299
//     ],
//     [
//       1708682531761,
//       1000605429749.2019
//     ],
//     [
//       1708686143633,
//       1004770978387.9739
//     ],
//     [
//       1708689716847,
//       1005565322059.5974
//     ],
//     [
//       1708693285923,
//       1001088475572.0964
//     ],
//     [
//       1708696810789,
//       1001483015274.1394
//     ],
//     [
//       1708700454098,
//       1003424502137.1743
//     ],
//     [
//       1708704098934,
//       999705624531.6053
//     ],
//     [
//       1708707710421,
//       1001883297801.1704
//     ],
//     [
//       1708711312566,
//       1003580641811.5026
//     ],
//     [
//       1708714811299,
//       1004653681836.4452
//     ],
//     [
//       1708718502994,
//       1003002428825.4791
//     ],
//     [
//       1708722115878,
//       1003293506710.019
//     ],
//     [
//       1708725717927,
//       1001149180343.0516
//     ],
//     [
//       1708729349338,
//       997261415828.8303
//     ],
//     [
//       1708732825434,
//       999139504635.63
//     ],
//     [
//       1708736504267,
//       999710432185.926
//     ],
//     [
//       1708740129072,
//       993731973760.4177
//     ],
//     [
//       1708743730524,
//       997237191583.3234
//     ],
//     [
//       1708747235964,
//       997895988511.1234
//     ],
//     [
//       1708750835677,
//       1001010070223.361
//     ],
//     [
//       1708754514835,
//       1002093965773.9073
//     ],
//     [
//       1708758099039,
//       1000261061169.597
//     ],
//     [
//       1708761677690,
//       1002672112237.7451
//     ],
//     [
//       1708765212056,
//       1000888087245.4452
//     ],
//     [
//       1708768804629,
//       1003133886429.7957
//     ],
//     [
//       1708772482834,
//       1002786188626.9014
//     ],
//     [
//       1708776000873,
//       1003239362156.9141
//     ],
//     [
//       1708779701943,
//       1002633314802.0986
//     ],
//     [
//       1708783218072,
//       1004225139731.14
//     ],
//     [
//       1708786867952,
//       1003212688475.9495
//     ],
//     [
//       1708790479332,
//       1003994260592.8099
//     ],
//     [
//       1708794069850,
//       1004899546210.1519
//     ],
//     [
//       1708797633115,
//       1014244201403.481
//     ],
//     [
//       1708801206507,
//       1012144828724.122
//     ],
//     [
//       1708804831899,
//       1013693313131.2323
//     ],
//     [
//       1708808474602,
//       1011649882296.4442
//     ],
//     [
//       1708812086589,
//       1012443606636.1359
//     ],
//     [
//       1708815678178,
//       1013144216832.6648
//     ],
//     [
//       1708819215580,
//       1012485917140.1924
//     ],
//     [
//       1708822806963,
//       1010545436092.6625
//     ],
//     [
//       1708826438995,
//       1013298982218.6483
//     ],
//     [
//       1708830020494,
//       1014210189062.5228
//     ],
//     [
//       1708833709618,
//       1013192450768.7805
//     ],
//     [
//       1708837286075,
//       1012877981027.5577
//     ],
//     [
//       1708840845904,
//       1015546140269.5797
//     ],
//     [
//       1708844455984,
//       1016886309729.2804
//     ],
//     [
//       1708848047889,
//       1015765532230.2488
//     ],
//     [
//       1708851682493,
//       1013661038111.1842
//     ],
//     [
//       1708855297028,
//       1013906146745.888
//     ],
//     [
//       1708858880004,
//       1013030885052.9457
//     ],
//     [
//       1708862449163,
//       1014718996691.7421
//     ],
//     [
//       1708866098631,
//       1013565466651.44
//     ],
//     [
//       1708869623658,
//       1014073352434.6404
//     ],
//     [
//       1708873267407,
//       1015870936432.5133
//     ],
//     [
//       1708876942340,
//       1011505907985.8765
//     ],
//     [
//       1708880479690,
//       1009475942220.7983
//     ],
//     [
//       1708884137786,
//       1012326031630.4117
//     ],
//     [
//       1708887627158,
//       1012219900255.0015
//     ],
//     [
//       1708891295636,
//       1014909873707.58
//     ],
//     [
//       1708894876782,
//       1016785939252.3314
//     ],
//     [
//       1708898448420,
//       1016733211657.9844
//     ],
//     [
//       1708902080677,
//       1018300293863.1229
//     ],
//     [
//       1708905688282,
//       1016549456019.3263
//     ],
//     [
//       1708909263412,
//       1015116316007.1443
//     ],
//     [
//       1708912848734,
//       1011459645461.5442
//     ],
//     [
//       1708916412926,
//       1010811224112.3704
//     ],
//     [
//       1708920114768,
//       1011145105895.9673
//     ],
//     [
//       1708923710804,
//       1012207119576.7063
//     ],
//     [
//       1708927336030,
//       1013112879710.2456
//     ],
//     [
//       1708930825823,
//       1011443698685.7849
//     ],
//     [
//       1708934502891,
//       1008562861882.439
//     ],
//     [
//       1708938064291,
//       1007289302155.0299
//     ],
//     [
//       1708941644605,
//       1001475667014.6954
//     ],
//     [
//       1708945328089,
//       1005100487829.6636
//     ],
//     [
//       1708948865895,
//       1003076350734.3326
//     ],
//     [
//       1708952441228,
//       1004846259778.3307
//     ],
//     [
//       1708956152688,
//       1006656124035.6163
//     ],
//     [
//       1708959724910,
//       1015428547835.7711
//     ],
//     [
//       1708963391515,
//       1037612322430.9332
//     ],
//     [
//       1708966893125,
//       1045895615813.1677
//     ],
//     [
//       1708970447366,
//       1048184302870.1835
//     ],
//     [
//       1708974090474,
//       1051838827077.1998
//     ],
//     [
//       1708977654511,
//       1068840006879.9297
//     ],
//     [
//       1708981215611,
//       1071935018965
//     ],
//     [
//       1708984887113,
//       1073527610615.3386
//     ],
//     [
//       1708988499623,
//       1073818422497.5765
//     ],
//     [
//       1708992018129,
//       1071049856128.8474
//     ],
//     [
//       1708995699572,
//       1071883972768.4811
//     ],
//     [
//       1708999371707,
//       1093345933553.5131
//     ],
//     [
//       1709002808418,
//       1105748821587.6326
//     ],
//     [
//       1709006526892,
//       1104202465154.7454
//     ],
//     [
//       1709010064988,
//       1097771006048.3848
//     ],
//     [
//       1709013945449,
//       1102062604419.9512
//     ],
//     [
//       1709017242764,
//       1106316027697.4639
//     ],
//     [
//       1709020942475,
//       1101364062315.6055
//     ],
//     [
//       1709024444797,
//       1108501125744.534
//     ],
//     [
//       1709028067123,
//       1111495236451.5835
//     ],
//     [
//       1709031669169,
//       1112101804338.684
//     ],
//     [
//       1709035318241,
//       1108475806302.401
//     ],
//     [
//       1709038896096,
//       1126201030709.1912
//     ],
//     [
//       1709042481352,
//       1120246523051.874
//     ],
//     [
//       1709046022575,
//       1114001375030.0234
//     ],
//     [
//       1709049653918,
//       1117992951621.805
//     ],
//     [
//       1709053246231,
//       1121922815540.586
//     ],
//     [
//       1709056843205,
//       1118751326375.2676
//     ],
//     [
//       1709060452397,
//       1121224058847.3137
//     ],
//     [
//       1709064094547,
//       1126026844426.6108
//     ],
//     [
//       1709067645320,
//       1118752010741.0125
//     ],
//     [
//       1709071267870,
//       1112303033094.626
//     ],
//     [
//       1709074805759,
//       1117944458595.1775
//     ],
//     [
//       1709078423373,
//       1118963733317.3013
//     ],
//     [
//       1709082057013,
//       1120695561748.8418
//     ],
//     [
//       1709085642138,
//       1116416040977.7747
//     ],
//     [
//       1709089268707,
//       1118556235877.317
//     ],
//     [
//       1709092914065,
//       1118740964371.3025
//     ],
//     [
//       1709096454511,
//       1123896947847.3635
//     ],
//     [
//       1709100079772,
//       1122459476200.2952
//     ],
//     [
//       1709103641844,
//       1123437402405.4797
//     ],
//     [
//       1709107224089,
//       1136576276814.633
//     ],
//     [
//       1709110959555,
//       1168880663280.831
//     ],
//     [
//       1709114533651,
//       1166180331668.5151
//     ],
//     [
//       1709118014350,
//       1163268242073.485
//     ],
//     [
//       1709121709561,
//       1161178818221.9902
//     ],
//     [
//       1709125229259,
//       1166710656119.664
//     ],
//     [
//       1709128968990,
//       1175113827980.9563
//     ],
//     [
//       1709132493958,
//       1187157433401.2688
//     ],
//     [
//       1709136097018,
//       1198994350469.4634
//     ],
//     [
//       1709139685108,
//       1212703029181.2449
//     ],
//     [
//       1709143248159,
//       1202250332756.9578
//     ],
//     [
//       1709146914036,
//       1196734191154.9211
//     ],
//     [
//       1709150492423,
//       1196674492301.2803
//     ],
//     [
//       1709154071256,
//       1186792564197.4485
//     ],
//     [
//       1709157666948,
//       1187243436185.6746
//     ],
//     [
//       1709161213417,
//       1203038968177.5745
//     ],
//     [
//       1709164870725,
//       1225273849241.6978
//     ],
//     [
//       1709168455578,
//       1207488109596.7732
//     ],
//     [
//       1709172121555,
//       1205040916683.6294
//     ],
//     [
//       1709175763804,
//       1209233042442.2266
//     ],
//     [
//       1709179471349,
//       1207889092900.2483
//     ],
//     [
//       1709183000738,
//       1227425352573.8088
//     ],
//     [
//       1709186417808,
//       1222317889093.2395
//     ],
//     [
//       1709190059272,
//       1245894227340.013
//     ],
//     [
//       1709193736654,
//       1231744558750.7554
//     ],
//     [
//       1709197227008,
//       1230003317657.0444
//     ],
//     [
//       1709200851380,
//       1228284265415.457
//     ],
//     [
//       1709204505873,
//       1229839687357.9229
//     ],
//     [
//       1709208048925,
//       1236513981420.7615
//     ],
//     [
//       1709211638432,
//       1227628063478.8442
//     ],
//     [
//       1709215228146,
//       1232642479031.5066
//     ],
//     [
//       1709218873445,
//       1235603513613.5818
//     ],
//     [
//       1709222425200,
//       1236824273911.2515
//     ],
//     [
//       1709226149850,
//       1221724126092.9236
//     ],
//     [
//       1709229678412,
//       1197915451452.4382
//     ],
//     [
//       1709233288700,
//       1189552897746.05
//     ],
//     [
//       1709236886710,
//       1207505023517.5376
//     ],
//     [
//       1709240407238,
//       1220271305198.8367
//     ],
//     [
//       1709244025804,
//       1198262112618.3218
//     ],
//     [
//       1709247633666,
//       1196836674210.0479
//     ],
//     [
//       1709251303668,
//       1206725326872.1362
//     ],
//     [
//       1709254901278,
//       1207659069972.4697
//     ],
//     [
//       1709255798000,
//       1204663818973.8123
//     ]
//   ],
//   "total_volumes": [
//     [
//       1708653653038,
//       25088506003.274303
//     ],
//     [
//       1708657287489,
//       25509939057.37894
//     ],
//     [
//       1708660928603,
//       25347882566.29914
//     ],
//     [
//       1708664513569,
//       25611781371.993965
//     ],
//     [
//       1708668077437,
//       25626294266.751564
//     ],
//     [
//       1708671648428,
//       25553219251.687023
//     ],
//     [
//       1708675239477,
//       25233009112.07592
//     ],
//     [
//       1708678893428,
//       24996501906.39643
//     ],
//     [
//       1708682531761,
//       25071874739.59266
//     ],
//     [
//       1708686143633,
//       21719016600.9664
//     ],
//     [
//       1708689716847,
//       23527863214.024708
//     ],
//     [
//       1708693285923,
//       21547364311.974373
//     ],
//     [
//       1708696810789,
//       20981388707.291855
//     ],
//     [
//       1708700454098,
//       24578838065.26966
//     ],
//     [
//       1708704098934,
//       24600418912.226738
//     ],
//     [
//       1708707710421,
//       22193721754.158737
//     ],
//     [
//       1708711312566,
//       22329239178.61181
//     ],
//     [
//       1708714811299,
//       25272947295.516056
//     ],
//     [
//       1708718502994,
//       25002532330.47921
//     ],
//     [
//       1708722115878,
//       23896845956.91604
//     ],
//     [
//       1708725717927,
//       23440218921.404613
//     ],
//     [
//       1708729349338,
//       22625552439.94647
//     ],
//     [
//       1708732825434,
//       22637679779.740997
//     ],
//     [
//       1708736504267,
//       19356641994.93403
//     ],
//     [
//       1708740129072,
//       21698077415.935356
//     ],
//     [
//       1708743730524,
//       19724154101.03449
//     ],
//     [
//       1708747235964,
//       18336008092.221653
//     ],
//     [
//       1708750835677,
//       21007841999.58213
//     ],
//     [
//       1708754514835,
//       21211595464.96044
//     ],
//     [
//       1708758099039,
//       18548278633.46818
//     ],
//     [
//       1708761677690,
//       16456636391.018354
//     ],
//     [
//       1708765212056,
//       18158618593.137573
//     ],
//     [
//       1708768804629,
//       16991744747.715332
//     ],
//     [
//       1708772482834,
//       19264414384.146946
//     ],
//     [
//       1708776000873,
//       19745894461.499207
//     ],
//     [
//       1708779701943,
//       19306144919.469524
//     ],
//     [
//       1708783218072,
//       18885795702.720898
//     ],
//     [
//       1708786867952,
//       15802056211.238102
//     ],
//     [
//       1708790479332,
//       15986653884.635038
//     ],
//     [
//       1708794069850,
//       14725961027.050577
//     ],
//     [
//       1708797633115,
//       14898151069.127632
//     ],
//     [
//       1708801206507,
//       15412333529.023151
//     ],
//     [
//       1708804831899,
//       15101139598.428228
//     ],
//     [
//       1708808474602,
//       15138789613.245934
//     ],
//     [
//       1708812086589,
//       15790533154.46137
//     ],
//     [
//       1708815678178,
//       14021275293.667166
//     ],
//     [
//       1708819215580,
//       15528276123.53668
//     ],
//     [
//       1708822806963,
//       15476278823.09789
//     ],
//     [
//       1708826438995,
//       14844046877.034218
//     ],
//     [
//       1708830020494,
//       16206987294.557993
//     ],
//     [
//       1708833709618,
//       16652818989.169682
//     ],
//     [
//       1708837286075,
//       16853219407.620281
//     ],
//     [
//       1708840845904,
//       17034962881.459614
//     ],
//     [
//       1708844455984,
//       17233810833.673798
//     ],
//     [
//       1708848047889,
//       15273069642.477106
//     ],
//     [
//       1708851682493,
//       16490442460.155031
//     ],
//     [
//       1708855297028,
//       14433796521.421743
//     ],
//     [
//       1708858880004,
//       16397572595.773033
//     ],
//     [
//       1708862449163,
//       16119326029.661821
//     ],
//     [
//       1708866098631,
//       16184085485.14664
//     ],
//     [
//       1708869623658,
//       16023780730.136995
//     ],
//     [
//       1708873267407,
//       14639783906.259144
//     ],
//     [
//       1708876942340,
//       16170333400.764809
//     ],
//     [
//       1708880479690,
//       16860894195.822685
//     ],
//     [
//       1708884137786,
//       15271894786.63086
//     ],
//     [
//       1708887627158,
//       14584554631.850718
//     ],
//     [
//       1708891295636,
//       15033690788.78931
//     ],
//     [
//       1708894876782,
//       15781697389.559649
//     ],
//     [
//       1708898448420,
//       15790609952.54825
//     ],
//     [
//       1708902080677,
//       15698164585.168365
//     ],
//     [
//       1708905688282,
//       15611072965.862782
//     ],
//     [
//       1708909263412,
//       14196048086.277689
//     ],
//     [
//       1708912848734,
//       13467534516.774422
//     ],
//     [
//       1708916412926,
//       15006397590.311485
//     ],
//     [
//       1708920114768,
//       14452080026.65365
//     ],
//     [
//       1708923710804,
//       14363909498.077662
//     ],
//     [
//       1708927336030,
//       12694441642.55791
//     ],
//     [
//       1708930825823,
//       14039052324.926624
//     ],
//     [
//       1708934502891,
//       14367659280.591326
//     ],
//     [
//       1708938064291,
//       14528576459.205872
//     ],
//     [
//       1708941644605,
//       15535231359.419926
//     ],
//     [
//       1708945328089,
//       15975837011.05566
//     ],
//     [
//       1708948865895,
//       16201685564.562986
//     ],
//     [
//       1708952441228,
//       17139119090.652431
//     ],
//     [
//       1708956152688,
//       17689956794.287136
//     ],
//     [
//       1708959724910,
//       18160141360.579407
//     ],
//     [
//       1708963391515,
//       21850100533.83387
//     ],
//     [
//       1708966893125,
//       25462113189.106293
//     ],
//     [
//       1708970447366,
//       20923613421.848663
//     ],
//     [
//       1708974090474,
//       27503240692.905766
//     ],
//     [
//       1708977654511,
//       31659419325.615734
//     ],
//     [
//       1708981215611,
//       33221863613.4176
//     ],
//     [
//       1708984887113,
//       34621023705.734695
//     ],
//     [
//       1708988499623,
//       35419457791.3391
//     ],
//     [
//       1708992018129,
//       35407941475.56789
//     ],
//     [
//       1708995699572,
//       36177862808.186966
//     ],
//     [
//       1708999371707,
//       38267768928.781395
//     ],
//     [
//       1709002808418,
//       38254876771.63696
//     ],
//     [
//       1709006526892,
//       45841867245.52107
//     ],
//     [
//       1709010064988,
//       46845511630.35973
//     ],
//     [
//       1709013945449,
//       48004735610.89787
//     ],
//     [
//       1709017242764,
//       47859769079.206
//     ],
//     [
//       1709020942475,
//       44728357723.34934
//     ],
//     [
//       1709024444797,
//       47648478190.53981
//     ],
//     [
//       1709028067123,
//       46222859732.01902
//     ],
//     [
//       1709031669169,
//       51642143738.71708
//     ],
//     [
//       1709035318241,
//       51961355879.21293
//     ],
//     [
//       1709038896096,
//       39170827844.235176
//     ],
//     [
//       1709042481352,
//       57728213450.93654
//     ],
//     [
//       1709046022575,
//       52532210601.10194
//     ],
//     [
//       1709049653918,
//       57685443494.57214
//     ],
//     [
//       1709053246231,
//       48664224222.92382
//     ],
//     [
//       1709056843205,
//       55808897895.70222
//     ],
//     [
//       1709060452397,
//       55361186523.75938
//     ],
//     [
//       1709064094547,
//       53542382439.2012
//     ],
//     [
//       1709067645320,
//       52700915502.32096
//     ],
//     [
//       1709071267870,
//       52454326406.935104
//     ],
//     [
//       1709074805759,
//       45504125369.506355
//     ],
//     [
//       1709078423373,
//       51983799587.1939
//     ],
//     [
//       1709082057013,
//       51668863845.501076
//     ],
//     [
//       1709085642138,
//       41174718286.08609
//     ],
//     [
//       1709089268707,
//       41502108499.62158
//     ],
//     [
//       1709092914065,
//       43066130181.59337
//     ],
//     [
//       1709096454511,
//       42173888391.447716
//     ],
//     [
//       1709100079772,
//       35818547836.77433
//     ],
//     [
//       1709103641844,
//       40882239092.67253
//     ],
//     [
//       1709107224089,
//       24525512954.547817
//     ],
//     [
//       1709110959555,
//       46037231438.46321
//     ],
//     [
//       1709114533651,
//       47374168827.22449
//     ],
//     [
//       1709118014350,
//       47809319938.27881
//     ],
//     [
//       1709121709561,
//       39540984440.151115
//     ],
//     [
//       1709125229259,
//       42708951813.18045
//     ],
//     [
//       1709128968990,
//       51328355986.83787
//     ],
//     [
//       1709132493958,
//       55815518910.58223
//     ],
//     [
//       1709136097018,
//       55287774684.25641
//     ],
//     [
//       1709139685108,
//       60490158615.25319
//     ],
//     [
//       1709143248159,
//       70870612616.83463
//     ],
//     [
//       1709146914036,
//       77558462470.89178
//     ],
//     [
//       1709150492423,
//       79450165136.72177
//     ],
//     [
//       1709154071256,
//       80898882801.58424
//     ],
//     [
//       1709157666948,
//       81987047638.36406
//     ],
//     [
//       1709161213417,
//       84327637925.88936
//     ],
//     [
//       1709164870725,
//       86896465049.57669
//     ],
//     [
//       1709168455578,
//       89196209525.41898
//     ],
//     [
//       1709172121555,
//       90687208216.35928
//     ],
//     [
//       1709175763804,
//       92110986789.5304
//     ],
//     [
//       1709179471349,
//       92719506688.80232
//     ],
//     [
//       1709183000738,
//       77620879105.11717
//     ],
//     [
//       1709186417808,
//       95943470565.21587
//     ],
//     [
//       1709190059272,
//       100190083678.78897
//     ],
//     [
//       1709193736654,
//       99280569075.97072
//     ],
//     [
//       1709197227008,
//       98398275168.06242
//     ],
//     [
//       1709200851380,
//       86238786758.79967
//     ],
//     [
//       1709204505873,
//       95356283731.85904
//     ],
//     [
//       1709208048925,
//       85478834645.85771
//     ],
//     [
//       1709211638432,
//       93765936531.0907
//     ],
//     [
//       1709215228146,
//       90713927321.959
//     ],
//     [
//       1709218873445,
//       78875236955.1518
//     ],
//     [
//       1709222425200,
//       85846094237.62488
//     ],
//     [
//       1709226149850,
//       85132813621.3606
//     ],
//     [
//       1709229678412,
//       74988578738.92221
//     ],
//     [
//       1709233288700,
//       70349190484.73605
//     ],
//     [
//       1709236886710,
//       69839977016.40472
//     ],
//     [
//       1709240407238,
//       69217836342.63173
//     ],
//     [
//       1709244025804,
//       69944359184.51135
//     ],
//     [
//       1709247633666,
//       59990667070.911736
//     ],
//     [
//       1709251303668,
//       67515353973.84128
//     ],
//     [
//       1709254901278,
//       65387119890.563934
//     ],
//     [
//       1709255798000,
//       65039425015.57826
//     ]
//   ]
// }
