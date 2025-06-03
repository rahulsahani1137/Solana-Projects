use anchor_lang::prelude::*;

declare_id!("AdKoH5HDsxcVDje1cCM6Z6D7qWYR7MZfDKtCkL15m3Jp");

#[program]
pub mod cpi_returns {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        let account = &mut ctx.accounts.account;
        account.value = 10;
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, payer = user, space = 8+8)]
    pub account: Account<'info, CpiReturnAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CpiReturn<'info> {
    pub account: Account<'info, CpiReturnAccount>,
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct  StructReturn {
    pub value: u64,
}

#[account]
pub struct CpiReturnAccount {
    pub value: u64,
}
