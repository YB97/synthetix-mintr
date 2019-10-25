import React from 'react';
import styled from 'styled-components';
import { withTranslation, Trans } from 'react-i18next';

import { formatCurrency } from '../../../helpers/formatters';
import { SlidePage } from '../../../components/ScreenSlider';
import { ButtonTertiary } from '../../../components/Button';
import TransactionPriceIndicator from '../../../components/TransactionPriceIndicator';
import { PLarge, PageTitle, DataHeaderLarge, Subtext } from '../../../components/Typography';
import Spinner from '../../../components/Spinner';

const Confirmation = ({ t, goBack, walletType, depositAmount }) => {
	return (
		<SlidePage>
			<Container>
				<Navigation>
					<ButtonTertiary onClick={() => goBack(1)}>{t('button.navigation.back')}</ButtonTertiary>
				</Navigation>
				<Top>
					<Intro>
						<ActionImage src={`/images/wallets/${walletType.toLowerCase()}.svg`} />
						<PageTitle>{t('depot.deposit.confirmation.pageTitle')}</PageTitle>
						<PLarge>
							<Trans i18nKey="wallet.prompts">
								To continue, follow the prompts on your ${walletType} Wallet.
							</Trans>
						</PLarge>
					</Intro>
					<Details>
						<Box>
							<DataHeaderLarge>{t('depot.deposit.confirmation.actionDescription')}</DataHeaderLarge>
							<Amount>{formatCurrency(depositAmount)} sUSD</Amount>
						</Box>
					</Details>
				</Top>
				<Loading>
					<Spinner margin="auto" />
					<Subtext>{t('depot.deposit.confirmation.loading')}</Subtext>
				</Loading>
				<Bottom>
					<TransactionPriceIndicator canEdit={false} />
				</Bottom>
			</Container>
		</SlidePage>
	);
};

const Container = styled.div`
	width: 100%;
	height: 850px;
	max-width: 720px;
	margin: 0 auto;
	overflow: hidden;
	background-color: ${props => props.theme.colorStyles.panels};
	border: 1px solid ${props => props.theme.colorStyles.borders};
	border-radius: 5px;
	box-shadow: 0px 5px 10px 5px ${props => props.theme.colorStyles.shadow1};
	margin-bottom: 20px;
	padding: 48px 64px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: space-between;
`;

const Navigation = styled.div`
	width: 100%;
	display: flex;
	text-align: left;
`;

const Top = styled.div`
	height: auto;
`;

const Bottom = styled.div`
	height: auto;
	margin-bottom: 48px;
`;

const Intro = styled.div`
	max-width: 420px;
	margin: 0px auto 48px auto;
`;

const ActionImage = styled.img`
	height: 64px;
	width: 64px;
	margin-bottom: 16px;
`;

const Details = styled.div`
	display: flex;
	margin: auto;
`;

const Box = styled.div`
	height: auto;
	width: 320px;
	padding: 24px 40px;
	margin: auto;
	border: 1px solid ${props => props.theme.colorStyles.borders};
	border-radius: 2px;
	display: flex;
	flex-direction: column;
`;

const Amount = styled.span`
	color: ${props => props.theme.colorStyles.hyperlink};
	font-family: 'apercu-medium';
	font-size: 24px;
	margin: 16px 0px 0px 0px;
`;

const Loading = styled.div`
	align-items: center;
`;

export default withTranslation()(Confirmation);
