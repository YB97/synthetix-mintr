import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { shortenAddress } from '../../helpers/formatters';

import { getWalletDetails } from '../../ducks/wallet';

import { WalletStatusButton } from '../Button';
import ThemeSwitcher from '../ThemeSwitcher';

import { setCurrentPage } from '../../ducks/ui';
import { Globe } from '../Icons';

import { LanguageDropdown } from '../../components/Dropdown';
import Logo from '../../components/Logo';

import { PAGES_BY_KEY } from '../../constants/ui';

const Header = ({ walletDetails, setCurrentPage }) => {
	const { t } = useTranslation();
	const { currentWallet, networkName } = walletDetails;

	const [flagDropdownIsVisible, setFlagVisibility] = useState(false);
	return (
		<HeaderWrapper>
			<HeaderBlock>
				<SmallLogo isSmall />
			</HeaderBlock>
			<HeaderBlock>
				<WalletStatusButton onClick={() => setCurrentPage(PAGES_BY_KEY.WALLET_SELECTION)}>
					{shortenAddress(currentWallet)}
					<Network>{networkName}</Network>
				</WalletStatusButton>
				<LanguageButtonWrapper>
					<RoundButton onClick={() => setFlagVisibility(true)}>
						<Globe />
					</RoundButton>
					<LanguageDropdown
						isVisible={flagDropdownIsVisible}
						setIsVisible={setFlagVisibility}
						position={{ left: 0 }}
					/>
				</LanguageButtonWrapper>
				<ThemeSwitcher
					onLabel={t('dashboard.header.onLabel')}
					offLabel={t('dashboard.header.offLabel')}
				/>
			</HeaderBlock>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 85px;
	padding: 0 32px;
`;

const HeaderBlock = styled.div`
	display: flex;
	align-items: center;
`;

const SmallLogo = styled(Logo)`
	width: 40px;
	margin-right: 8px;
`;

const RoundButton = styled.button`
	margin: 0 5px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 30px;
	padding: 0;
	height: 40px;
	width: 40px;
	border: 1px solid ${props => props.theme.colorStyles.borders};
	background-color: ${props => props.theme.colorStyles.buttonTertiaryBgFocus};
	&:focus {
		outline: none;
	}
`;

const LanguageButtonWrapper = styled.div`
	position: relative;
`;

const Network = styled.div`
	background-color: ${props => props.theme.colorStyles.buttonTertiaryBgFocusDarken};
	display: flex;
	align-items: center;
	text-transform: uppercase;
	color: ${props => props.theme.colorStyles.subtext};
	padding: 5px 10px;
	font-size: 12px;
	border-radius: 2px;
	height: min-content;
	margin-left: 20px;
	font-weight: 600;
	border-radius: 20px;
`;

const mapStateToProps = state => ({
	walletDetails: getWalletDetails(state),
});

const mapDispatchToProps = {
	setCurrentPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
